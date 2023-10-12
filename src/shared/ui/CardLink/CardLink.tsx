import cn from 'classnames';
import cls from './CardLink.module.css';

interface Props {
  name?: string;
  isLoading: boolean;
  isError: boolean;
}

export function CardLink({ name, isLoading, isError }: Props) {
  if (isLoading) {
    return (
      <div className={cls.container}>
        <div className={cn(cls.item, { [cls.loading]: isLoading })}>{'.-.'}</div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className={cls.container}>
        <div className={cls.item}>{'error'}</div>
      </div>
    );
  }

  return (
    <div className={cls.container}>
      <div className={cls.item}>{name}</div>
    </div>
  );
}