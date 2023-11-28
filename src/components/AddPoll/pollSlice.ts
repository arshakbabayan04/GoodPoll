import { createSlice } from "@reduxjs/toolkit";
import { Poll } from "../../types";
import {
    addPoll,
    changePollActive,
    getActivePoll,
    getPoll,
    quotePoll,
} from "./pollApi";

interface pollState {
    poll: Poll[];
}

const initialState: pollState = {
    poll: [],
};

const pollSlice = createSlice({
    name: "poll",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(addPoll.fulfilled, () => {
                console.log("Data Posted :)))");
            })
            .addCase(getPoll.fulfilled, (state, action) => {
                state.poll = action.payload;
            })
            .addCase(changePollActive.fulfilled, () => {
                console.log("Poll Active Changed :)))");
            })
            .addCase(getActivePoll.fulfilled, (state, action) => {
                state.poll = action.payload;
            })
            .addCase(quotePoll.fulfilled, () => {
                console.log("Poll count Changed :)))");
            });
    },
});

export default pollSlice.reducer;

export const {} = pollSlice.actions;
