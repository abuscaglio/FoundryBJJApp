import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    //App
    centered: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    //loginPage
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 15
      },
      containerb: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'rgba(227,227,227,0.6)',
        borderRadius: 15
      },
      header: {
        flex: .7,
      },
      footer: {
        flex: .90,
        padding: 12
      },
      imageBackground: {
          display: "flex",
          flexDirection: "row",
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%'
      },
      title: {
      color: 'yellow',
      fontWeight: 'bold'
      },
      action: {
          flexDirection: 'row',
          paddingBottom: 18
      },
      passwordInput: {
        flexDirection: 'row',
    },
      logInButton: {
          alignItems: 'center',
          justifyContent: 'center',
          paddingVertical: 20,
          paddingHorizontal: 32,
          borderRadius: 4,
          elevation: 3,
          backgroundColor: '#575757',
          width: '100%'
      },
      regContBtnEnabled: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 10,
        paddingBottom: 5
      },
      regContBtnDisabled: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 10,
        paddingBottom: 5,
        opacity: .4
      },
      registerButton: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 20,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'gray',
        width: '100%'
      },
      btnText: {
        fontSize: 20,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
      },
      textInputEmail: {
          flex: 1,
          height: 40,
          marginTop: 2,
          paddingBottom: 5,
          borderWidth: 1,
          borderColor: 'gray',
          color: 'gray',
      },
      textInputPassword: {
          flex: 1,
          height: 40,
          marginTop: 2,
          paddingBottom: 5,
          borderWidth: 1,
          borderColor: 'gray',
          color: 'gray'
      },
      logInButtonContainer: {
          alignItems: 'center',
          justifyContent: 'center',
          paddingTop: 30
      },
      registerButtonContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 10
      },
      animation: {
          backgroundColor: '#ffffff',
          paddingVertical: 5,
          marginTop: 10,
          borderRadius: 100,
          alignItems: 'center',
          width: '100%',
          height: '25%'
      },
      textLogin: {
          color: 'gray',
          fontWeight: 'bold',
          fontSize: 18
      }
    }
  );