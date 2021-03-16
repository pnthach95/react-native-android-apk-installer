declare module 'react-native-android-apk-installer' {

    const AndroidApkInstaller: {
        install: (filePath: string) => Promise<string>;
    };

    export = AndroidApkInstaller;
}