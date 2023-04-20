import { User } from "./04_1_interfaces";

// Interface having method definition
// The dev is not responsible for implementing this method here, the sole purpose of this method is to maintain the type-safety of this method.
// This method is implemented in the "03_classes\03_2_class_methods.ts" file.
interface Login {
    login(): User;
};

export {
    Login,
};
