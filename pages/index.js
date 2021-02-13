import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head';
import Menu from '../components/Menu';


function home(){
    return(
        <div>
            <Menu />
            <Head>
                <title>
                    Home - react
                </title>
                <meta name='robots' content='index/follow' />
                <meta name='description' content='site de ... sobre...' />
            </Head>
            <h1>bem vindo carla</h1>
  
        </div>
    );
};

export default home;