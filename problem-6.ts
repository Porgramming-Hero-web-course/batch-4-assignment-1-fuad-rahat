interface Profile {
    name: string;
    age: number;
    email: string;
}

const updateProfile = (X: Profile, Y: { name?: string; age?: number; email?: string }): Profile => {
    return { ...X, ...Y };
};

const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
console.log(updateProfile(myProfile, { age: 26 }));
