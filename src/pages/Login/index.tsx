import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from "@ionic/react";
import ExploreContainer from "../../components/ExploreContainer";

export const Login : React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Sophia</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Login</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <ExploreContainer name="Login page" />
            </IonContent>
        </IonPage>
    );
}
