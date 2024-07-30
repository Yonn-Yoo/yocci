import { Navigate } from 'react-router-dom';
import { useAuthContext } from '../../contexts/auth-context';

type Props = {
  children: JSX.Element;
  isAdminRequired?: boolean;
  redirectPath?: string;
};

export default function ProtectedRoute({
  isAdminRequired,
  children,
  redirectPath,
}: Props) {
  const { user } = useAuthContext();

  if (!user || (isAdminRequired && !user.isAdmin)) {
    return <Navigate to={redirectPath || '/'} replace />;
  }

  return children;
}
