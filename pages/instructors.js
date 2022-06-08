import React from 'react';
import { SafeAreaView, View } from 'react-native';
import ImageSlider from "../components/instructors/imageSlider";

export default function InstructorsPage() {
    return (
           <SafeAreaView style={{flex: 1, backgroundColor: '#262b2a'}}>
               <ImageSlider/>
           </SafeAreaView>
    )
   }