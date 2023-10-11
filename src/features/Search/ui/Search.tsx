import { useState } from 'react';
import cls from './Search.module.css'

export function Search() {
  const [query, setQuery] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  }

  return (
    <div className={cls.container}>
      <input
        className={cls.input}
        type="text"
        placeholder='Поиск по вселенной Star Wars'
        value={query}
        onChange={handleChange}
      />
    </div>
  );
} 