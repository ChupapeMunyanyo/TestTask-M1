
import { Link, useParams } from 'react-router-dom';
import { useSinglePage } from '../model/useSinglePage';
import { Button } from '../../../shared/ui/Button/Button';

/**
 * Страница детальной информации об элементе
 */
export const SinglePage = () => {
  const { id } = useParams();
  const { item, loading, error } = useSinglePage(id);

  if (loading) return <div className="single-page__loading">Loading...</div>;
  if (error) return <div className="single-page__error">Error: {error}</div>;
  if (!item) return <div className="single-page__not-found">Item not found</div>;

  return (
    <div className="single-page">
      <Link to="/" className="single-page__back-link">
        <Button variant="secondary" size="small">
          Go Back
        </Button>
      </Link>
      
      <h2 className="single-page__title">Item Details</h2>
      
      <div className="single-page__content">
        <div className="single-page__field">
          <span className="single-page__label">ID:</span>
          <span className="single-page__value">{item.id}</span>
        </div>
        
        <div className="single-page__field">
          <span className="single-page__label">Name:</span>
          <span className="single-page__value">{item.name}</span>
        </div>
        
        <div className="single-page__field">
          <span className="single-page__label">Description:</span>
          <span className="single-page__value">{item.description}</span>
        </div>
      </div>
    </div>
  );
};