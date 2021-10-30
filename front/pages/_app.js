import 'antd/dist/antd.css'
import Head from 'next/head'
import PropTypes from 'prop-types';

const App = ({ Component }) => {
    return (
        <>
            <Head>
                <meta charset="utf-8"/>
                <title>MiniProject</title>
            </Head>
            <Component /> 
        </>
    );
}

App.propTypes ={
    Component: PropTypes.elementType.isRequired,
}

export default App;