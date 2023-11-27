// Задача №1
// Подсчет заморозков 
function countFreezes(temperatures) {
    let freezeCount = 0;
    let longestFreeze = 0;
    let currentFreeze = 0;

    for (let i = 0; i < temperatures.length - 1; i++) {
        if (temperatures[i] >= 0 && temperatures[i + 1] < 0) {
            freezeCount++;
            currentFreeze++;
        } else if (temperatures[i] < 0) {
            currentFreeze++;
        } else {
            if (currentFreeze > longestFreeze) {
                longestFreeze = currentFreeze;
            }
            currentFreeze = 0;
        }
    }

    if (temperatures[temperatures.length - 1] < 0 && currentFreeze > longestFreeze) {
        longestFreeze = currentFreeze;
    }

    return { freezeCount, longestFreeze };
}

const temperatures = [-48, -46, 48, 27, -20, -35, 43, 4, 9, 10, 41, -46, -4, 0, -38, -49, 25, -46, -48, -23, -25, -22, 12, 38, 19, -20, 26, 4, 19, 23, 26, -41, 4, -13, -9, -11, -7, 38, 27, 41, 14, -35, -38, -44, -44, -22, -24, 29, -32, 41, 7, -25, 3, 27, -45, 10, 48, 8, -34, -49, 17, -16, 41, -11, -50, -6, -34, 20, 14, -18, 39, -28, -33, -27, -48, 40, -37, -44, 0, 46, 36, -34, -50, 8, -3, 26, 40, 10, -36, 24];

const { freezeCount, longestFreeze } = countFreezes(temperatures);

console.log(`............................................`);
console.log(`Задача №1`);
console.log(`Температуры за 90 дней зимы: ${temperatures}`);
console.log(`Количество заморозков: ${freezeCount}`);
console.log(`Самый длинный период заморозков: ${longestFreeze} дней`);
console.log(`............................................`);
console.log(`Задача №2`);





// Задача №2
const bitcoinPrices = [10, 18, 33, 7, 31, 3, 8, 22, 29, 7, 8];
// Days                0   1   2   3  4   5  6  7   8   9  10

function calculateMaxProfit(prices) {
    let minPrice = Infinity;
    let maxProfit = 0;
    let buyDay = 0;
    let sellDay = 0;

    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i];
            buyDay = i;
        } else if (prices[i] - minPrice > maxProfit) {
            maxProfit = prices[i] - minPrice;
            sellDay = i;
        }
    }

    return { maxProfit, buyDay, sellDay };
}

const { maxProfit, buyDay, sellDay } = calculateMaxProfit(bitcoinPrices);
console.log(`Цены биткоина: ${bitcoinPrices}`);
console.log(`Куплено в день: ${buyDay}, Продано в день: ${sellDay}`);
console.log(`Максимальная прибыль: ${maxProfit}`);
console.log(`............................................`);
