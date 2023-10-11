import cls from './Sidebar.module.css';

export function Sidebar() {
  return (
    <aside className={cls.container}>
      <div className={cls.title}>ПАНЕЛЬ</div>
    </aside>
  );
}