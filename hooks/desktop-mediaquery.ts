import { useMedia } from 'react-use';

export default function useMediaQuery(){
    const isDesktop = useMedia("(min-width: 800px)");
    return {isDesktop}
}