import { FC } from 'react'
import styles from './Button.module.scss'
import classNames from 'classnames'
import { EButtonColors, EButtonTypes } from '../../constants/ui-elements-params'
import { useButtonDecors } from '../../hooks/useButtonDecors'

interface IButtonProps {
  color?: EButtonColors
  type?: EButtonTypes
  value?: string
  handleClick?: () => void
  isStretched?: boolean
  isRounded?: boolean
}

export const Button: FC<IButtonProps> = ({
  color = EButtonColors.default,
  value,
  type = EButtonTypes.button,
  handleClick: handleClickProp = () => {},
  isStretched = false,
  isRounded = false,
  children,
}) => {
  const { addButtonDecor, buttonDecorsIdList } = useButtonDecors()

  const handleClick = () => {
    addButtonDecor()
    handleClickProp()
  }

  return (
    <div className={styles.buttonContainer}>
      {buttonDecorsIdList.map((id) => (
        <div
          key={id}
          className={classNames(styles.buttonDecor, isRounded && styles.buttonDecor_rounded)}
        />
      ))}
      <div className={styles.wrapper}>
        <button
          onClick={handleClick}
          type={type}
          className={classNames(
            styles.button,
            isStretched && styles.button_stretched,
            isRounded && styles.button_rounded,
            color === EButtonColors.blue && styles.button_color_blue,
            color === EButtonColors.red && styles.button_color_red
          )}
        >
          {children}
          {value && <span className={styles.value}>{value}</span>}
        </button>
      </div>
    </div>
  )
}
