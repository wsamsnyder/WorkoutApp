export interface Machine {
    id: string
    title: string
    settings: {
        back: number
        seat: number
        optional?: number | null
    }
    previous: {
        weight: number
        reps: number
    }
}
