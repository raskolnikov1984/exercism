public class Lasagna {
    final int EXPECTED_MINUTES_IN_OVEN = 40;
    final int PREPARATION_TIME_PER_LAYER = 2;

    public int expectedMinutesInOven() {
        return this.EXPECTED_MINUTES_IN_OVEN;
    }

    public int remainingMinutesInOven(int remaining_oven_time) {
        return this.expectedMinutesInOven() - remaining_oven_time;
    }

    public int preparationTimeInMinutes(int layers) {
        return layers * this.PREPARATION_TIME_PER_LAYER;
    }

    public int totalTimeInMinutes(int layers, int minutes) {
        return this.preparationTimeInMinutes(layers) + minutes;
    }
}
