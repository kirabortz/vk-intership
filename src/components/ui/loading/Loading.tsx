import s from './Loading.module.scss'
import LoadingSvg from '../../../assets/icons/svg/components/LoadingSvg.tsx'

export const Loading = () => {
  return (
    <div className={s.loading}>
      <LoadingSvg />
    </div>
  )
}
