const { add, multiply } = require('./index');

// Прості тести без Jest
console.log('🧪 Running simple tests...');

// Тест 1
if (add(1, 2) === 3) {
    console.log('✅ Test 1 passed: 1 + 2 = 3');
} else {
    console.log('❌ Test 1 failed');
    process.exit(1);
}

// Тест 2
if (multiply(3, 4) === 12) {
    console.log('✅ Test 2 passed: 3 * 4 = 12');
} else {
    console.log('❌ Test 2 failed');
    process.exit(1);
}

console.log('🎉 All tests passed!');
