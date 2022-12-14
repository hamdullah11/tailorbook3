import { View, Text } from "react-native";
import React from "react";
import * as Contacts from "expo-contacts";

const selectContactFromPhone = async () => {
  const { status } = await Contacts.requestPermissionsAsync();

  if (status === "granted") {
    const { data } = await Contacts.getContactsAsync({
      fields: [Contacts.Fields.Emails],
    });
    console.log(data[0]);
  }
};

export default selectContactFromPhone;
