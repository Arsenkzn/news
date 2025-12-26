import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
import { DirectionType, SkeletonType } from '@/shared/Interfaces';

interface Props {
  isLoading: boolean;
  direction?: DirectionType
  type?: SkeletonType,
}

function withSkeleton<P extends object>(
  Component: React.ComponentType<P>,
  count?: number,
) {
  return function WithSkeleton(props: Props & P) {
    const { isLoading, type, direction='column', ...restProps } = props;

    if (isLoading) {
      return <Skeleton type={type} count={count} direction={direction} />;
    }

    return <Component {...(restProps as P)} />;
  };
}

export default withSkeleton;
