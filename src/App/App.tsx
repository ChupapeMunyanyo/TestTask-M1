import { Routes, Route } from 'react-router-dom';
import { ListPage } from '../Pages/list-page/ui/ListPage';
import { SinglePage } from '../Pages/singlePage/ui/SinglePage';

/**
 * Главный компонент приложения с настройкой роутинга
 */
export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<ListPage />} />
      <Route path="/:id" element={<SinglePage />} />
    </Routes>
  );
};



