const tg = window.Telegram.WebApp;

// --- Configuration ---
const firebaseConfig = {
    apiKey: "AIzaSyCyH3Z92F8RQweInLC5w_bk_AaLx6XT7UE", // Use your actual config
    authDomain: "ab-wallet-62482.firebaseapp.com",
    databaseURL: "https://ab-wallet-62482-default-rtdb.firebaseio.com",
    projectId: "ab-wallet-62482",
    storageBucket: "ab-wallet-62482.firebasestorage.app",
    messagingSenderId: "642030839072",
    appId: "1:642030839072:web:77fc92375ba72e2ee62345"
};

const INITIAL_COINS_PER_TAP = 0.1;
const INITIAL_PASSIVE_INCOME_PER_HOUR = 0;
const UPGRADE_COST_INCREMENT = 10000; // How much cost increases per buy

// Define shop items
// Structure: { id: 'uniqueId', name: 'Display Name', description: 'Effect', baseCost: 10000, baseValue: 1 (e.g., +1 per click/hour) }
const clickUpgrades = [
    { id: 'click_1', name: 'Better Paws', description: '+1 Coin per Tap', baseCost: 10000, baseValue: 1 },
    { id: 'click_2', name: 'Sharp Claws', description: '+2 Coins per Tap', baseCost: 50000, baseValue: 2 },
    { id: 'click_3', name: 'Golden Fur', description: '+5 Coins per Tap', baseCost: 200000, baseValue: 5 },
    // Add 7 more click upgrades following the pattern
    { id: 'click_4', name: 'Diamond Eyes', description: '+10 Coins per Tap', baseCost: 1000000, baseValue: 10 },
    { id: 'click_5', name: 'Turbo Tap', description: '+25 Coins per Tap', baseCost: 5000000, baseValue: 25 },
    { id: 'click_6', name: 'Mega Click', description: '+50 Coins per Tap', baseCost: 15000000, baseValue: 50 },
    { id: 'click_7', name: 'Ultra Click', description: '+100 Coins per Tap', baseCost: 50000000, baseValue: 100 },
    { id: 'click_8', name: 'Cosmic Paw', description: '+250 Coins per Tap', baseCost: 150000000, baseValue: 250 },
    { id: 'click_9', name: 'Galaxy Grip', description: '+500 Coins per Tap', baseCost: 500000000, baseValue: 500 },
    { id: 'click_10', name: 'Meme Lord Touch', description: '+1000 Coins per Tap', baseCost: 1000000000, baseValue: 1000 },
];

const passiveUpgrades = [
    { id: 'passive_1', name: 'Cozy Den', description: '+10 Coins/Hour', baseCost: 10000, baseValue: 10 },
    { id: 'passive_2', name: 'Shiny Toy', description: '+50 Coins/Hour', baseCost: 75000, baseValue: 50 },
    { id: 'passive_3', name: 'Auto Feeder', description: '+150 Coins/Hour', baseCost: 250000, baseValue: 150 },
    // Add 17 more passive upgrades
    { id: 'passive_4', name: 'Meme Stream', description: '+300 Coins/Hour', baseCost: 600000, baseValue: 300 },
    { id: 'passive_5', name: 'Wolf Pack', description: '+500 Coins/Hour', baseCost: 1200000, baseValue: 500 },
    { id: 'passive_6', name: 'Investment Howl', description: '+1K Coins/Hour', baseCost: 2500000, baseValue: 1000 },
    { id: 'passive_7', name: 'Meme Factory', description: '+2K Coins/Hour', baseCost: 5000000, baseValue: 2000 },
    { id: 'passive_8', name: 'Coin Printer', description: '+5K Coins/Hour', baseCost: 12000000, baseValue: 5000 },
    { id: 'passive_9', name: 'Gold Mine', description: '+10K Coins/Hour', baseCost: 25000000, baseValue: 10000 },
    { id: 'passive_10', name: 'Crypto Den', description: '+25K Coins/Hour', baseCost: 60000000, baseValue: 25000 },
    { id: 'passive_11', name: 'Meme Bank', description: '+50K Coins/Hour', baseCost: 120000000, baseValue: 50000 },
    { id: 'passive_12', name: 'Wolf Street', description: '+100K Coins/Hour', baseCost: 250000000, baseValue: 100000 },
    { id: 'passive_13', name: 'Meme Exchange', description: '+200K Coins/Hour', baseCost: 500000000, baseValue: 200000 },
    { id: 'passive_14', name: 'Diamond Mine', description: '+500K Coins/Hour', baseCost: 1000000000, baseValue: 500000 },
    { id: 'passive_15', name: 'Quantum Computer', description: '+1M Coins/Hour', baseCost: 2000000000, baseValue: 1000000 },
    { id: 'passive_16', name: 'Moon Base', description: '+2.5M Coins/Hour', baseCost: 5000000000, baseValue: 2500000 },
    { id: 'passive_17', name: 'Mars Colony', description: '+5M Coins/Hour', baseCost: 10000000000, baseValue: 5000000 },
    { id: 'passive_18', name: 'Galaxy Fund', description: '+10M Coins/Hour', baseCost: 20000000000, baseValue: 10000000 },
    { id: 'passive_19', name: 'Meme Dimension', description: '+25M Coins/Hour', baseCost: 50000000000, baseValue: 25000000 },
    { id: 'passive_20', name: 'Universe Brain', description: '+50M Coins/Hour', baseCost: 100000000000, baseValue: 50000000 },
];


// --- Global Variables ---
let firebaseApp;
let database;
let userId = null;
let userData = {
    coins: 0,
    coinsPerTap: INITIAL_COINS_PER_TAP,
    passiveIncomePerHour: INITIAL_PASSIVE_INCOME_PER_HOUR,
    lastLogin: Date.now(),
    tonWallet: null,
    clickUpgradeLevels: {}, // { 'click_1': 2, 'click_2': 1 }
    passiveUpgradeLevels: {}, // { 'passive_1': 5 }
};
let lastSaveTime = Date.now();
let saveDebounceTimeout = null;
let passiveIncomeInterval = null;

// --- DOM Elements ---
const loadingScreen = document.getElementById('loading-screen');
const appContainer = document.getElementById('app-container');
const coinBalanceElement = document.getElementById('coin-balance');
const earnPerTapElement = document.getElementById('earn-per-tap');
const earnPerHourElement = document.getElementById('earn-per-hour');
const clickerButton = document.getElementById('clicker-button');
const clickFeedbackContainer = document.getElementById('click-feedback-container');
const pages = document.querySelectorAll('.page');
const navButtons = document.querySelectorAll('.nav-button');
const clickUpgradesList = document.getElementById('click-upgrades-list');
const passiveUpgradesList = document.getElementById('passive-upgrades-list');
const profileUsername = document.getElementById('profile-username');
const profileUserid = document.getElementById('profile-userid');
const profileBalance = document.getElementById('profile-balance');
const tonWalletInput = document.getElementById('ton-wallet-input');
const saveWalletButton = document.getElementById('save-wallet-button');
const walletStatus = document.getElementById('wallet-status');
const usernameDisplay = document.getElementById('username-display');
const userIdDisplay = document.getElementById('user-id-display');
const totalPassiveIncomeDisplay = document.getElementById('total-passive-income-display');
const syncDataButton = document.getElementById('sync-data-button'); // For debugging

// --- Initialization ---
function initializeApp() {
    console.log("Initializing App...");
    tg.ready(); // Inform Telegram the app is ready
    tg.expand(); // Expand the Mini App to full height

    // Basic user info immediately
    if (tg.initDataUnsafe && tg.initDataUnsafe.user) {
        const user = tg.initDataUnsafe.user;
        userId = user.id.toString(); // Ensure ID is a string for Firebase keys
        usernameDisplay.textContent = user.first_name || 'Player';
        userIdDisplay.textContent = `ID: ${userId}`;
        profileUsername.textContent = `${user.first_name || ''} ${user.last_name || ''}`.trim() || 'N/A';
        profileUserid.textContent = userId;
        console.log("User ID:", userId);
    } else {
        console.error("Telegram user data not available.");
        // Handle error: Show message, prevent interaction
        loadingScreen.textContent = "Error: Could not get user info. Please try again.";
        return; // Stop initialization
    }

    // Initialize Firebase
    try {
        firebaseApp = firebase.initializeApp(firebaseConfig);
        database = firebase.database();
        console.log("Firebase Initialized");
    } catch (error) {
        console.error("Firebase initialization failed:", error);
        loadingScreen.textContent = "Error: Could not connect to database.";
        return; // Stop initialization
    }

    // Load user data from Firebase
    loadUserData();

    // Set up event listeners after data potentially loaded
    setupEventListeners();

     // Start passive income calculation
    startPassiveIncome();
}

// --- Firebase Functions ---
function loadUserData() {
    if (!userId || !database) return;
    console.log(`Loading data for user ${userId}...`);
    const userRef = database.ref('users/' + userId);

    userRef.once('value')
        .then((snapshot) => {
            if (snapshot.exists()) {
                const loadedData = snapshot.val();
                console.log("Data loaded:", loadedData);
                // Merge loaded data with defaults, ensuring no fields are missing
                userData = {
                    ...userData, // Start with defaults
                    ...loadedData, // Overwrite with loaded data
                    // Ensure nested objects are also merged/initialized correctly
                    clickUpgradeLevels: loadedData.clickUpgradeLevels || {},
                    passiveUpgradeLevels: loadedData.passiveUpgradeLevels || {},
                };

                // Calculate offline earnings (basic example)
                const now = Date.now();
                const timeOfflineMs = now - (userData.lastLogin || now);
                const hoursOffline = timeOfflineMs / (1000 * 60 * 60);
                const offlineEarnings = Math.floor(userData.passiveIncomePerHour * hoursOffline);

                if (offlineEarnings > 0) {
                    userData.coins += offlineEarnings;
                    console.log(`Earned ${formatNumber(offlineEarnings)} coins while offline.`);
                    // Optionally: Show a notification to the user about offline earnings
                }
                userData.lastLogin = now; // Update last login time

            } else {
                console.log("No existing data found. Creating new user data.");
                // Keep default userData, maybe save initial state immediately
                userData.lastLogin = Date.now();
                saveUserData(true); // Save initial state
            }
            // Update UI after data is loaded/initialized
            updateAllUI();
             // Hide loading screen, show app
            loadingScreen.style.display = 'none';
            appContainer.style.display = 'flex'; // Use flex as defined in CSS
        })
        .catch((error) => {
            console.error("Error loading user data:", error);
            loadingScreen.textContent = "Error loading your progress. Please try again.";
             // Still show the app but maybe disable saving? Or use local defaults.
            // updateAllUI(); // Update UI with defaults
            // loadingScreen.style.display = 'none';
            // appContainer.style.display = 'flex';
        });
}

function saveUserData(forceSave = false) {
    if (!userId || !database) {
        console.error("Cannot save: userId or database not initialized.");
        return;
    }

    const now = Date.now();
    // Debounce saving to avoid hammering Firebase, unless forced
    if (!forceSave && now - lastSaveTime < 5000) { // Save max every 5 seconds
        clearTimeout(saveDebounceTimeout);
        saveDebounceTimeout = setTimeout(() => saveUserData(true), 5000 - (now - lastSaveTime));
       // console.log("Debouncing save...");
        return;
    }

    clearTimeout(saveDebounceTimeout);
    lastSaveTime = now;
    userData.lastLogin = now; // Always update lastLogin on save

    console.log("Saving data:", userData);
    const userRef = database.ref('users/' + userId);
    userRef.set(userData)
        .then(() => {
            console.log("Data saved successfully.");
        })
        .catch((error) => {
            console.error("Error saving user data:", error);
            // Optional: Notify user of save failure
        });
}

// --- Game Logic ---
function handleTap(event) {
    if (!userData) return;

    const tapAmount = userData.coinsPerTap;
    userData.coins += tapAmount;

    // Update display immediately for responsiveness
    updateCoinDisplay();

    // Create click feedback animation
    createClickFeedback(tapAmount, event.clientX, event.clientY);

    // Trigger haptic feedback if available
    try {
        tg.HapticFeedback.impactOccurred('light'); // 'light', 'medium', 'heavy'
    } catch (e) { /* Ignore if not supported */ }

    // Debounced save
    saveUserData();
}

function calculatePassiveIncome() {
    if (!userData || userData.passiveIncomePerHour <= 0) return;

    const now = Date.now();
    const timeElapsedMs = now - (userData.lastLogin || now); // Use lastLogin as the reference
    const hoursElapsed = timeElapsedMs / (1000 * 60 * 60);

    if (hoursElapsed > (1 / 3600)) { // Only calculate if at least 1 second passed
        const incomeEarned = userData.passiveIncomePerHour * hoursElapsed;
        if (incomeEarned >= 0.0001) { // Only add if it's a noticeable amount
            userData.coins += incomeEarned;
           // console.log(`Passive income: Earned ${incomeEarned.toFixed(4)}`);
            updateCoinDisplay(); // Update display
        }
         userData.lastLogin = now; // Update last login time *after* calculation
         saveUserData(); // Save periodically with passive income
    }
}

function startPassiveIncome() {
    if (passiveIncomeInterval) {
        clearInterval(passiveIncomeInterval);
    }
    // Calculate and save every 5 seconds (adjust interval as needed)
    passiveIncomeInterval = setInterval(calculatePassiveIncome, 5000);
}


// --- Shop Logic ---
function calculateItemCost(item, level) {
    // Cost increases by UPGRADE_COST_INCREMENT for *each* level purchased
    let cost = item.baseCost;
    for (let i = 0; i < level; i++) {
        cost += UPGRADE_COST_INCREMENT;
    }
    return cost;
    // Alternative simpler: return item.baseCost + (level * UPGRADE_COST_INCREMENT);
}

function renderShop(type) {
    const listElement = type === 'click' ? clickUpgradesList : passiveUpgradesList;
    const upgrades = type === 'click' ? clickUpgrades : passiveUpgrades;
    const levels = type === 'click' ? userData.clickUpgradeLevels : userData.passiveUpgradeLevels;

    listElement.innerHTML = ''; // Clear previous items

    if (!upgrades || upgrades.length === 0) {
        listElement.innerHTML = '<p>No upgrades available yet.</p>';
        return;
    }

    upgrades.forEach(item => {
        const currentLevel = levels[item.id] || 0;
        const cost = calculateItemCost(item, currentLevel);

        const itemDiv = document.createElement('div');
        itemDiv.classList.add('shop-item');

        const canAfford = userData.coins >= cost;

        itemDiv.innerHTML = `
            <div class="shop-item-info">
                <span class="shop-item-name">${item.name}</span>
                <p class="shop-item-desc">${item.description}</p>
                <span class="shop-item-level">Level: ${currentLevel}</span>
            </div>
            <button class="buy-button" data-item-id="${item.id}" data-item-type="${type}" ${canAfford ? '' : 'disabled'}>
                <span class="shop-item-cost">
                    <img src="./meme-wolf-coin.png" alt="Coin" class="coin-icon-tiny">
                    ${formatNumber(cost)}
                </span>
            </button>
        `;

        listElement.appendChild(itemDiv);

        // Add event listener directly to the button
        const buyButton = itemDiv.querySelector('.buy-button');
        buyButton.addEventListener('click', () => buyUpgrade(item.id, type));
    });
}


function buyUpgrade(itemId, type) {
    const upgrades = type === 'click' ? clickUpgrades : passiveUpgrades;
    const levels = type === 'click' ? userData.clickUpgradeLevels : userData.passiveUpgradeLevels;
    const item = upgrades.find(i => i.id === itemId);

    if (!item) {
        console.error("Item not found:", itemId);
        return;
    }

    const currentLevel = levels[itemId] || 0;
    const cost = calculateItemCost(item, currentLevel);

    if (userData.coins >= cost) {
        userData.coins -= cost;
        levels[itemId] = currentLevel + 1;

        // Recalculate totals
        recalculateTotals();

        // Update UI
        updateCoinDisplay();
        updateStatsDisplay();
        renderShop(type); // Re-render the specific shop section
        if (type === 'passive') {
             totalPassiveIncomeDisplay.textContent = formatNumber(userData.passiveIncomePerHour);
        }


        // Force save immediately after purchase
        saveUserData(true);

        console.log(`Bought ${item.name} (Level ${levels[itemId]}), Cost: ${formatNumber(cost)}`);
        tg.HapticFeedback.notificationOccurred('success');

    } else {
        console.log("Not enough coins to buy", item.name);
        // Optional: Show a message to the user
        tg.HapticFeedback.notificationOccurred('error');
    }
}

function recalculateTotals() {
    // Recalculate Coins Per Tap
    let totalTapBonus = 0;
    clickUpgrades.forEach(item => {
        const level = userData.clickUpgradeLevels[item.id] || 0;
        totalTapBonus += level * item.baseValue;
    });
    userData.coinsPerTap = INITIAL_COINS_PER_TAP + totalTapBonus;

    // Recalculate Passive Income Per Hour
    let totalPassiveIncome = 0;
    passiveUpgrades.forEach(item => {
        const level = userData.passiveUpgradeLevels[item.id] || 0;
        totalPassiveIncome += level * item.baseValue;
    });
    userData.passiveIncomePerHour = INITIAL_PASSIVE_INCOME_PER_HOUR + totalPassiveIncome;
}


// --- UI Update Functions ---
function updateCoinDisplay() {
    if (userData) {
        const formattedCoins = formatNumber(userData.coins);
        coinBalanceElement.textContent = formattedCoins;
        profileBalance.textContent = formattedCoins; // Update profile balance too
    }
     // Update button states in shops based on new balance
     updateShopButtonStates();
}

function updateStatsDisplay() {
     if (userData) {
        earnPerTapElement.textContent = formatNumber(userData.coinsPerTap, 1); // Show 1 decimal if needed
        earnPerHourElement.textContent = formatNumber(userData.passiveIncomePerHour);
        totalPassiveIncomeDisplay.textContent = formatNumber(userData.passiveIncomePerHour);
     }
}

function updateProfileDisplay() {
     if (userData) {
        tonWalletInput.value = userData.tonWallet || '';
     }
}

function updateShopButtonStates() {
    document.querySelectorAll('.buy-button').forEach(button => {
        const itemId = button.dataset.itemId;
        const itemType = button.dataset.itemType;
        if (!itemId || !itemType) return;

        const upgrades = itemType === 'click' ? clickUpgrades : passiveUpgrades;
        const levels = itemType === 'click' ? userData.clickUpgradeLevels : userData.passiveUpgradeLevels;
        const item = upgrades.find(i => i.id === itemId);

        if (item) {
            const currentLevel = levels[itemId] || 0;
            const cost = calculateItemCost(item, currentLevel);
            button.disabled = userData.coins < cost;

            // Update cost display on the button itself
            const costSpan = button.querySelector('.shop-item-cost');
             if (costSpan) {
                 costSpan.innerHTML = `<img src="./meme-wolf-coin.png" alt="Coin" class="coin-icon-tiny"> ${formatNumber(cost)}`;
            }
        }
    });
}


function updateAllUI() {
    recalculateTotals(); // Ensure stats are correct based on loaded levels
    updateCoinDisplay();
    updateStatsDisplay();
    updateProfileDisplay();
    renderShop('click');
    renderShop('passive');
    // No need to call updateShopButtonStates separately, renderShop does it
}

function showPage(pageId) {
    pages.forEach(page => {
        page.classList.toggle('active-page', page.id === pageId);
    });
    navButtons.forEach(button => {
        button.classList.toggle('active', button.dataset.page === pageId);
    });
     // Scroll to top when changing page
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
        mainContent.scrollTop = 0;
    }
}

// --- Number Formatting ---
const numberSuffixes = ["", "K", "M", "B", "T", "Qa", "Qi", "Sx", "Sp", "Oc", "No", "Dc"];

function formatNumber(num, precision = 1) {
    const numFloat = parseFloat(num); // Ensure it's a number
     if (isNaN(numFloat)) return "0";
     if (numFloat < 1000) return numFloat.toFixed(Math.min(precision, numFloat % 1 === 0 ? 0 : precision)); // Show decimals for small numbers if they exist

    const tier = Math.floor(Math.log10(Math.abs(numFloat)) / 3);

    if (tier >= numberSuffixes.length) {
        // Handle very large numbers if needed (e.g., scientific notation)
         return numFloat.toExponential(precision);
    }

    const suffix = numberSuffixes[tier];
    const scale = Math.pow(10, tier * 3);
    const scaled = numFloat / scale;

    return scaled.toFixed(precision) + suffix;
}

// --- Animations ---
function createClickFeedback(amount, clickX, clickY) {
    const feedback = document.createElement('div');
    feedback.classList.add('click-feedback');
    feedback.textContent = `+${formatNumber(amount, 1)}`;

    // Position near the click/tap
    const rect = clickerButton.getBoundingClientRect(); // Use button's position as reference
    const containerRect = clickFeedbackContainer.getBoundingClientRect();

    // Calculate position relative to the feedback container
    // Use event coords if available, otherwise default to center of button
     let posX = (clickX ? clickX - containerRect.left : rect.width / 2) + (Math.random() * 40 - 20); // Add randomness
     let posY = (clickY ? clickY - containerRect.top : rect.height / 2) - 20; // Start slightly above center/click

    feedback.style.left = `${posX}px`;
    feedback.style.top = `${posY}px`;

    clickFeedbackContainer.appendChild(feedback);

    // Remove the element after the animation finishes
    feedback.addEventListener('animationend', () => {
        try {
            clickFeedbackContainer.removeChild(feedback);
        } catch (e) { /* ignore if already removed */ }
    });

     // Failsafe removal after 2 seconds
    setTimeout(() => {
       try {
            if (feedback.parentNode === clickFeedbackContainer) {
                 clickFeedbackContainer.removeChild(feedback);
            }
        } catch (e) { /* ignore */ }
    }, 2000);
}

// --- Event Listeners Setup ---
function setupEventListeners() {
    // Clicker Button (handle multiple touches)
    clickerButton.addEventListener('pointerdown', handleTap, { passive: true }); // Use pointerdown for better multi-touch

    // Navigation
    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            showPage(button.dataset.page);
        });
    });

    // Profile - Save Wallet
    saveWalletButton.addEventListener('click', () => {
        const newWallet = tonWalletInput.value.trim();
        // Basic validation (optional, add more robust checks)
        if (newWallet.length > 10) { // Example: very basic check
            userData.tonWallet = newWallet;
            walletStatus.textContent = 'Wallet address saved!';
            walletStatus.style.color = 'var(--success-color)';
            saveUserData(true); // Force save wallet change
        } else if (newWallet === '') {
             userData.tonWallet = null; // Allow clearing
             walletStatus.textContent = 'Wallet address cleared.';
             walletStatus.style.color = 'var(--text-muted-color)';
             saveUserData(true); // Force save wallet change
        }
         else {
            walletStatus.textContent = 'Invalid wallet address format.';
            walletStatus.style.color = 'var(--error-color)';
        }
         // Clear status message after a few seconds
         setTimeout(() => { walletStatus.textContent = ''; }, 3000);
    });

     // Sync Button (Debug)
     syncDataButton.addEventListener('click', () => {
         console.log("Manual sync triggered.");
         calculatePassiveIncome(); // Ensure latest passive is calculated before sync
         saveUserData(true); // Force save
         tg.HapticFeedback.impactOccurred('medium');
     });

     // Prevent page scroll bounce on iOS/Android (usually handled by body styles now)
     // document.body.addEventListener('touchmove', (e) => {
     //     // Allow scrolling only within the #main-content area
     //     if (!e.target.closest('#main-content')) {
     //        // e.preventDefault(); // Be careful with this, might block needed events
     //     }
     // }, { passive: false });

}


// --- App Start ---
window.addEventListener('load', initializeApp);