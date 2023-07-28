export interface CustomButtonProps {
    isDisabled?: boolean | undefined,
    title: string | 'Button',
    handleClick?: React.MouseEventHandler<HTMLButtonElement> | undefined | void
}