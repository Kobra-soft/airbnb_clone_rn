import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { useWarmUpBrowser } from "@/hooks/useWarmUpBrowser";
import { defaultStyles} from '@/constants/Styles';
import Colors from "@/constants/Colors";
import { AntDesign, Feather, FontAwesome5, Ionicons } from "@expo/vector-icons";
import { useOAuth } from "@clerk/clerk-expo";
import { useRouter } from "expo-router";

enum Strategy {
  Facebook = 'oauth_facebook',
  Google = 'oauth_google',
  Apple = 'oauth_apple'
}

const Page = () => {
  useWarmUpBrowser();
  
  const router = useRouter();
  const { startOAuthFlow: facebookAuth } = useOAuth({strategy: 'oauth_facebook'});
  const { startOAuthFlow: googleAuth } = useOAuth({strategy: 'oauth_google'});
  const { startOAuthFlow: appleAuth } = useOAuth({strategy: 'oauth_apple'});

  const onSelectAuth = async (strategy: Strategy) => {
    const SelectedAuth = {
      [Strategy.Facebook]: facebookAuth,
      [Strategy.Google]: googleAuth,
      [Strategy.Apple]: appleAuth
    }[strategy]; 

    try {
      const { createdSessionId, setActive } = await SelectedAuth();
      console.log(" ~ file: login.tsx:31 ~ onSelectAuth ~ createSessionId", createdSessionId)

      if ( createdSessionId) {
        setActive!({ session: createdSessionId})
        router.back();
      }
    }
    catch(err) {
        console.error('OAuth error:', err)
      }
  }


  return (
    <View style={styles.container} >
      <Text style={defaultStyles.textHeadings}>Log in or sign up to Airbnb</Text>
        <TextInput 
          autoCapitalize="none"
          placeholder="Email"
          placeholderTextColor="#5E5D5E" 
          style={[defaultStyles.inputField, {marginBottom:16, fontFamily: "Cereal", fontSize: 16.333}]}/>
          <TouchableOpacity style={defaultStyles.btn}>
            <Text style={defaultStyles.btnText}>Continue</Text>
          </TouchableOpacity>

          <View style={styles.separatorView}>
            <View style={{
              flex: 1,
              borderBottomColor: '#c8c8c8',
              borderBottomWidth: StyleSheet.hairlineWidth
            }}
            />
            {/* or TEXT */}
            <Text style={styles.separator}>or</Text>
            <View style={{
              flex: 1,
              borderBottomColor: '#c8c8c8',
              borderBottomWidth: StyleSheet.hairlineWidth
            }}
            />
          </View>
          <View style={{ gap: 16}}>
            <TouchableOpacity style={styles.btnOutline}>
              <Feather name="smartphone" size={24} color={"#505050"} style={defaultStyles.btnIcon}  />
              <Text style={styles.btnOutlineText}>Continue with Phone</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnOutline} onPress={() => onSelectAuth(Strategy.Facebook)}>
              <FontAwesome5 name="facebook" size={24} color={"#000000"} style={defaultStyles.btnIcon}  />
              <Text style={styles.btnOutlineText}>Continue with Facebook</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnOutline} onPress={() => onSelectAuth(Strategy.Google)}>
              <Ionicons name="logo-google" size={24} color={"#000000"} style={defaultStyles.btnIcon}  />
              <Text style={styles.btnOutlineText}>Continue with Google</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnOutline} onPress={() => onSelectAuth(Strategy.Apple)}>
              <AntDesign name="apple1" size={24} color={"#000000"} style={defaultStyles.btnIcon}  />
              <Text style={styles.btnOutlineText}>Continue with Apple</Text>
            </TouchableOpacity>
          </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#fff',
    paddingHorizontal: 26,
  },
  separatorView:{
    flexDirection: 'row',
    gap: 16,
    alignItems: 'center',
    marginVertical: 16
  },
  separator: {
    fontFamily: 'Cereal',
    color: Colors.grey,
    fontSize: 13,
  },
  btnOutline: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: Colors.grey,
    height: 50,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  btnOutlineText: {
    color: '#000',
    fontSize: 16,
    fontFamily: 'Cereal-medium',
    left:14
  }

})
export default Page;
