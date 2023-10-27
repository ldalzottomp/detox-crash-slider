import * as React from 'react';
import { Button, Text } from 'react-native';
import { Drawer } from 'react-native-drawer-layout';

export default function App() {
    const [open, setOpen] = React.useState(false);

    return (
        <Drawer
            open={open}
            onOpen={() => setOpen(true)}
            onClose={() => setOpen(false)}
            renderDrawerContent={() => {
                return (
                    <Button
                        title="Close"
                        testID="detox-drawer-close-button"
                        onPress={() => {
                            setOpen(false);
                        }}
                    />
                );
            }}
        >
            <Button
                testID="detox-drawer-open-button"
                onPress={() => setOpen((prevOpen) => !prevOpen)}
                title={`${open ? 'Close' : 'Open'} drawer`}
            />
        </Drawer>
    );
}
