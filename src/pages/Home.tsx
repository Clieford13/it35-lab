import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer />import { 
            IonButton,
            IonButtons,
              IonContent, 
              IonHeader, 
              IonMenuButton, 
              IonPage, 
              IonTitle, 
              IonToolbar, 
              useIonRouter
          } from '@ionic/react';
          
          const Login: React.FC = () => {
            const navigation = useIonRouter();
            const doLogin = () => {
                navigation.push('/it35-lab/app','forward','replace');
            }
            return (
              <IonPage>
                <IonHeader>
                  <IonToolbar>
                    <IonTitle>Login</IonTitle>
                  </IonToolbar>
                </IonHeader>
                <IonContent className='ion-padding'>
                    <IonButton onClick={() => doLogin()} expand="full">
                        Login
                    </IonButton>
                </IonContent>
              </IonPage>
            );
          };
          
          export default Login;
      </IonContent>
    </IonPage>
  );
};

export default Home;
