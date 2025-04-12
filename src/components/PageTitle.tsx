
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const PageTitle = () => {
  const location = useLocation();
  
  useEffect(() => {
    const pathToTitle: Record<string, string> = {
      '/': 'Home | Ruchit Sheth - Software Developer',
      '/about': 'About | Ruchit Sheth - Software Developer',
      '/contact': 'Contact | Ruchit Sheth - Software Developer',
    };
    
    const title = pathToTitle[location.pathname] || 'Ruchit Sheth - Software Developer';
    document.title = title;
  }, [location]);
  
  return null;
};

export default PageTitle;
