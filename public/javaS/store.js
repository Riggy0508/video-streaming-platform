let state={
    socketId:null,
    localStream:null,
    remoteStream:null,
    screenSharingStream:null,
    allowConnectionsFromStrangers:false,
    screenSharingActive:false
};

export const setSocketId=(socketId)=>{
    state={
        ...state,
        socketId:socketId,
    }
    console.log(state)
}

export const localStream=(stream)=>{
    state={
        ...state,
        localStream:stream
    }
}

export const setAllowConnectionsFromStrangers=(allowConnection)=>{
    state={
        ...state,
        allowConnectionsFromStrangers:allowConnection
    }
}

export const setScreenSharingActive=(screenShare)=>{
    state={
        ...state,
        screenSharingStream:screenShare,
    }
}

export const setScreenSharingStream=(screenSharingStream)=>{
    state={
        ...state,
        screenSharingActive:screenSharingStream

    }
}

export const setRemotStream=(stream)=>{
    state={
        ...state,
        remoteStream:stream
    }
}

export const getState=()=>{
    return state;
}