import Skeleton, { SkeletonProps } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const Loader = (props: SkeletonProps) => <Skeleton {...props} />;

export default Loader;
