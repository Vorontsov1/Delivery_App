import { View, Text } from 'react-native';
import React, { useMemo, forwardRef } from "react";
import {BottomSheetModal} from '@gorhom/bottom-sheet';


export type Ref = BottomSheetRef;

const BottomSheet = forwardRef<Ref>((props, ref) => {
  const snapPoints = useMemo(() => ["50%"], []);

  return (
    <BottomSheetModal ref={ref} snapPoints={snapPoints}>
      <View style={{ backgroundColor: "white" }}>
        <Text>Bottom Sheet</Text>
      </View>
    </BottomSheetModal>
  );
});

export default BottomSheet;
