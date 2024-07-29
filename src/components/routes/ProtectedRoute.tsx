import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../contexts/user-context';

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
  const { user } = useUser();
  const navigate = useNavigate();
  const isAdmin = user?.isAdmin;

  useEffect(() => {
    if (isAdminRequired && !isAdmin) {
      navigate(redirectPath || '/');
    } else if (!user) navigate(redirectPath || '/');
  }, [user, navigate, redirectPath, isAdmin, isAdminRequired]);

  return <>{children}</>;
}
