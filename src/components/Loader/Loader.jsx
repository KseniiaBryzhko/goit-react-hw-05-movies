import { MagnifyingGlass } from 'react-loader-spinner';
import { LoaderGif } from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderGif>
      <MagnifyingGlass
        visible={true}
        height="80"
        width="80"
        ariaLabel="MagnifyingGlass-loading"
        wrapperStyle={{}}
        wrapperClass="MagnifyingGlass-wrapper"
        glassColor="#476531"
        color="#ffffff"
      />
    </LoaderGif>
  );
};
