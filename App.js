import React from 'react';
import { Text, View, StatusBar, Pressable } from 'react-native';
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons'
import { ScrollView } from 'react-native-gesture-handler'

// colors is object, inside it `key: value` pair
const colors = {
  themeColor: '#487678', // 487678 you can find colors from colour picker
  white: '#fff',
  background: '#f4f6fc',
  greyish: '#a4a4a4',
  tint: '#072c2e'
}

const task = [
  {
    task: 'Morning Walk',
    complete: 'checkbox-marked-outline',
    icon: 'walk',
    stamp: 'Today. 6am'
  },
  {
    task: 'Interview on 2nd January',
    complete: 'checkbox-blank-outline',
    icon: 'account-tie',
    stamp: '2nd Jan 2021, 11am'
  },
  {
    task: 'Shopping',
    complete: 'checkbox-blank-outline',
    icon: 'cart',
    stamp: '31st Dec 2020, 2pm'
  },
  {
    task: 'Time for Gym',
    complete: 'checkbox-marked-outline',
    icon: 'weight-lifter',
    stamp: 'Today. 7am'
  },
  {
    task: 'Learn React-Native',
    complete: 'checkbox-blank-outline',
    icon: 'code-json',
    stamp: 'Today. 7am'
  },
  {
    task: 'Watch - The Office',
    complete: 'checkbox-blank-outline',
    icon: 'play',
    stamp: 'Today. 7am'
  }
];

const Task = ({ task, complete, icon, stamp }) => {
  return (
    <Pressable onPress={() => alert(`${task}, ${stamp}`)}>
      <View
        style={{
          backgroundColor: colors.white,
          flexDirection: "row",
          marginHorizontal: 16,
          marginVertical: 4,
          borderRadius: 20,
          paddingVertical: 20,
          paddingHorizontal: 24,
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <MaterialCommunityIcons
            name={complete}
            size={30}
            style={{ color: colors.themeColor, marginRight: 5 }}
          />
          <MaterialCommunityIcons // find different icons for expo: https://icons.expo.fyi/
            name={icon}
            size={30}
            style={{ color: colors.themeColor, marginRight: 5 }}
          />
          <View>
            <Text style={{ fontSize: 16 }}>{task}</Text>
            <Text style={{ color: colors.greyish }}>{stamp}</Text>
          </View>
        </View>

        <View style={{ flexDirection: "row" }}>
          <Pressable onPress={() => alert(`Task can not be modified.`)}>
            <MaterialCommunityIcons
              name="pencil"
              size={20}
              style={{ color: colors.themeColor }}
            />
          </Pressable>
          <MaterialCommunityIcons
            name="trash-can"
            size={20}
            style={{ color: colors.themeColor, marginLeft: 5 }}
          />
        </View>
      </View>
    </Pressable>
  );
}

export default function App(props) {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.themeColor,
      }}
    >
      <StatusBar barStyle="dark-content" backgroundColor={colors.themeColor} />
      <View style={{ backgroundColor: colors.themeColor }}>
        <View
          style={{
            padding: 16,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <MaterialCommunityIcons // find different icons for expo: https://icons.expo.fyi/
            name="text"
            size={30}
            style={{ color: colors.white }}
          />
          <View style={{ flexDirection: "row" }}>
            <MaterialCommunityIcons
              name="bell-outline"
              size={30}
              style={{ color: colors.white }}
            />
            <AntDesign name="user" size={30} style={{ color: colors.white }} />
          </View>
        </View>
        <View style={{ padding: 16 }}>
          <Text style={{ color: colors.white, fontSize: 30 }}>
            {`Hello, \nChints`}
          </Text>
          <View
            style={{
              paddingHorizontal: 16,
              paddingVertical: 6,
              flexDirection: "row",
              justifyContent: "space-between",
              backgroundColor: colors.tint,
              borderRadius: 20,
              marginVertical: 20,
              alignItems: "center",
            }}
          >
            <MaterialCommunityIcons
              name="microphone"
              size={30}
              style={{ color: colors.white }}
            />
            <View style={{ flexDirection: "row" }}>
              <MaterialCommunityIcons
                name="tune"
                size={30}
                style={{ color: colors.white }}
              />
            </View>
          </View>
        </View>
      </View>

      <View
        style={{
          padding: 20,
          flexDirection: "row",
          backgroundColor: colors.white,
          justifyContent: "space-between",
          alignItems: "center",
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        }}
      >
        <Text style={{ fontSize: 24 }}>Tasks</Text>
        <MaterialCommunityIcons
          name="plus"
          size={30}
          style={{
            color: colors.themeColor,
            backgroundColor: colors.white,
            borderRadius: 20,
            marginHorizontal: 8,
          }}
        />
      </View>

      <ScrollView
        style={{
          backgroundColor: colors.background,
        }}
      >
        {task.map((task) => (
          <Task
            task={task.task}
            complete={task.complete}
            icon={task.icon}
            stamp={task.stamp}
          />
        ))}
      </ScrollView>
    </View>
  );
}
