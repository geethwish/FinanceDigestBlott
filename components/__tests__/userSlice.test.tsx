import userReducer, { UserState } from "./../../store/slices/UserSlice";

jest.mock('@react-native-async-storage/async-storage', () => ({
    setItem: jest.fn(),
    getItem: jest.fn(),
    removeItem: jest.fn(),
    clear: jest.fn(),
}));


describe("UserSlice", () => {
    const initialState: UserState = {
        firstName: null,
        lastName: null,
        loading: false,
    };
    it("should handle initial state", () => {
        expect(userReducer(undefined, { type: "unknown" })).toEqual(initialState);
    });

    it("should handle registerUser", () => {
        const payload = { firstName: "Test", lastName: "User" };
        expect(
            userReducer(initialState, {
                type: "user/registerUser",
                payload,
            })
        ).toEqual({ ...initialState, firstName: payload.firstName, lastName: payload.lastName });
    });


});

