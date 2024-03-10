import { View, Text, Button, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { useAuth } from "@clerk/clerk-expo";
import { useNavigation, Link } from "expo-router";
import { defaultStyles } from "@/constants/Styles";
import Colors from '@/constants/Colors';


const ProfileScreen = () => {
  const { signOut, isSignedIn } = useAuth();
  const navigation = useNavigation();

  const handleSignOutAndGoBack = () => {
    signOut();
    navigation.goBack();
  };

{/* if user not signed in then show login link / DISABLED FOR NOW
      {!isSignedIn && (
        <Link href={'/(modals)/login'}>
          <Text>Login</Text>
        </Link>
      )} */}

return (
<View style={{ flex: 1, justifyContent: 'space-between'}}>
  <View style={styles.container}>
    <Text style={[defaultStyles.textHeadings, {paddingTop:20} ]}>Your profile</Text>
    <Text>Log in to start planning your next trip</Text>

    {/* Login button */}
    {!isSignedIn && (
      <View style={{ alignItems: 'stretch', marginTop: 20 }}>
        <TouchableOpacity style={defaultStyles.btn}>
        <Link href={'/(modals)/login'}>
            {/* <Text style={defaultStyles.btnText}>Log in</Text> */}
            <Text style={defaultStyles.btnText}>Log in</Text>
        </Link>
        </TouchableOpacity>
        <Text>Don't have an account? Sign Up</Text>
      </View>
      
    )}
  </View>

  {/* Logout button */}
  {isSignedIn && (
    <View style={{ alignItems: 'center', marginBottom: 20 }}>
      <Button title="Log out" onPress={handleSignOutAndGoBack} />
    </View>
  )}
  </View> 
  )
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

export default ProfileScreen;