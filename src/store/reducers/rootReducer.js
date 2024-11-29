const initState = {
    users: [
        { id: 1, name: "Nhangg" },
        { id: 2, name: "Hoi dan IT" },
        { id: 3, name: "THanh Nhanggg" },
        { id: 4, name: "Thanh Huyen" },
    ],
    testData: "Test thoi nha",
};

const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case "DELETE_USER":
            let users = state.users;
            users = users.filter((item) => item.id !== action.payload.id);
            return {
                ...state,
                users,
            };

            break;
        case "CREATE_USER":
            console.log(">>>>create new user redux", action);
            const id = Math.floor(Math.random() * 1000);
            let newUser = {
                id: id,
                name: `Thanh Nhangg version ${id}`,
            };

            return {
                ...state,
                users: [...state.users, newUser],
            };
            break;

        default:
            return state;

            break;
    }
};

export default rootReducer;
