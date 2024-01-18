import { Button as ButtonRNP, ButtonProps, Text } from 'react-native-paper'

interface Props extends ButtonProps {}

export function Button ({ children, ...rest }: Props) {
  return (
    <ButtonRNP mode='contained' { ...rest }>
      { children }
    </ButtonRNP>
  )
}