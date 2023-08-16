import '@testing-library/jest-dom'
import { userEvent } from '@storybook/testing-library'
import { render, screen, waitFor, renderHook, act, fireEvent } from '@testing-library/react'
import { useState } from 'react'
import InputText from '../InputText'

describe('InputText', () => {
  test('制御コンポーネントInputText(tailwind)でアクセシビリティも実装されていること', async () => {
    // 制御コンポーネントでpropsでstateモック
    const hooks = renderHook(() => useState(''))
    const { rerender } = render(
      <InputText
        id={'testid'}
        name={'root_test'}
        value={hooks.result.current[0]}
        onBlur={jest.fn()}
        onChange={(event) =>
          act(() => {
            hooks.result.current[1](event.target.value)
          })
        }
        label={'testLabel'}
        maxLength={10}
        minLength={2}
        pattern={'^[0-9]*$'}
        title={'test'}
        errorMessage={'test message'}
        heplerText='補助文章'
      />,
    )
    const textField = screen.getByRole('textbox')
    // helperTextが表示されている
    screen.getByRole('textbox', { description: '補助文章' })

    await userEvent.type(textField, 'あ')
    rerender(
      <InputText
        id={'testid'}
        name={'root_test'}
        value={hooks.result.current[0]}
        onBlur={jest.fn()}
        onChange={(event) =>
          act(() => {
            hooks.result.current[1](event.target.value)
          })
        }
        label={'testLabel'}
        maxLength={10}
        minLength={2}
        pattern={'^[0-9]*$'}
        title={'test'}
        errorMessage={'test message'}
        heplerText='補助文章'
      />,
    )
    // エラーメッセージがアクセシビリティ設定されていること
    // なぜかtoHaveAccessibleErrorMessageがis not functionになるのでコメントアウト
    // expect(
    //   screen.getByRole("textbox", { description: "補助文章" })
    // ).toHaveAccessibleErrorMessage("test message");

    // エラーメッセージが出てidが設定されている

    await waitFor(() =>
      expect(screen.getByText('test message')).toHaveAttribute('id', 'testid-error'),
    )

    // 入力内容が表示されること
    expect(screen.getByDisplayValue('あ')).toBeInTheDocument()
    // ラベルにアクセス可能でinputのラベルとして設定されている
    expect(screen.getByLabelText('testLabel')).toBeInTheDocument()
  })

  test('type=stringかつinputMode=numericの時、onBlurで全角数字から半角数字へ変換されること', async () => {
    // 制御コンポーネントでpropsでstateモック
    const hooks = renderHook(() => useState(''))
    const onBlurMock = jest.fn()
    const { rerender } = render(
      <InputText
        id={'testid'}
        name={'root_test'}
        value={hooks.result.current[0]}
        onBlur={onBlurMock}
        onChange={(event) =>
          act(() => {
            hooks.result.current[1](event.target.value)
          })
        }
        label={'testLabel'}
        maxLength={10}
        minLength={2}
        // pattern={"^[0-9]*$"}
        title={'test'}
        errorMessage={'test message'}
        heplerText='補助文章'
        type='text'
        inputMode='numeric'
      />,
    )
    const textField = screen.getByRole('textbox')

    await userEvent.type(textField, '１')
    await userEvent.keyboard('{enter}')
    // 複数文字をJestだと検証できないが（後から入力が優先されてしまう）
    // await userEvent.type(textField, "２");
    // await userEvent.keyboard("{enter}");
    rerender(
      <InputText
        id={'testid'}
        name={'root_test'}
        value={hooks.result.current[0]}
        onBlur={onBlurMock}
        onChange={(event) =>
          act(() => {
            hooks.result.current[1](event.target.value)
          })
        }
        label={'testLabel'}
        maxLength={10}
        minLength={2}
        // pattern={"^[0-9]*$"}
        title={'test'}
        errorMessage={'test message'}
        heplerText='補助文章'
        type='text'
        inputMode='numeric'
      />,
    )

    // 入力内容が表示されること
    expect(screen.getByDisplayValue('１')).toBeInTheDocument()
    // フォーカスを外してonBlur発火(userEventだと発火せず)
    fireEvent.blur(textField)
    expect(onBlurMock).toHaveBeenCalled()
    // 半角数字へと返還後の入力内容が表示されること
    expect(screen.getByDisplayValue('1')).toBeInTheDocument()
  })

  test('type=stringかつinputMode=numericの時、onBlurで全角数字以外の英字が混ざっていても取り除いて半角数字のみへ変換されること', () => {
    // 制御コンポーネントでpropsでstateモック
    const hooks = renderHook(() => useState('ああ３３a%'))
    const onBlurMock = jest.fn()
    render(
      <InputText
        id={'testid'}
        name={'root_test'}
        value={hooks.result.current[0]}
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        onBlur={() => onBlurMock()}
        onChange={(event) =>
          act(() => {
            hooks.result.current[1](event.target.value)
          })
        }
        label={'testLabel'}
        maxLength={10}
        minLength={2}
        // pattern={"^[0-9]*$"}
        title={'test'}
        errorMessage={'test message'}
        heplerText='補助文章'
        type='text'
        inputMode='numeric'
      />,
    )
    const textField = screen.getByRole('textbox')

    // 入力内容が表示されること
    expect(screen.getByDisplayValue('ああ３３a%')).toBeInTheDocument()
    // フォーカスを外してonBlur発火(userEventだと発火せず)
    fireEvent.blur(textField)

    expect(onBlurMock).toHaveBeenCalled()
    // 半角数字へと返還後の入力内容が表示されること
    expect(screen.getByDisplayValue('33')).toBeInTheDocument()
  })
})
