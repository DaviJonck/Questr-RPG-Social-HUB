import { GlobalStyle } from './globalStyle/style';
import Home from './home/page';

/**
 * The main page component that renders the HomePage component.
 *
 * @returns {JSX.Element} The rendered HomePage component.
 */

function Page() {
    return (
        <>
            <GlobalStyle />
            <Home />
            {/* outros componentes */}
        </>
    );
}
export default Page;
