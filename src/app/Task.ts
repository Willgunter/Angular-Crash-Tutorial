// This is an interface (learned abt this in 216)
// Basically a model for things

export interface Task {
    id?: number; // "?" means optional - so it doesn't trigger errors or anything
    text: string;
    day: string;
    reminder: boolean;
}