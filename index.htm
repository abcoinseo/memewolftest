<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
    <title>Meme Wolf Tap</title>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <script src="https://telegram.org/js/telegram-web-app.js"></script>
    <script src="https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js"></script>
    <script src="https://www.gstatic.com/firebasejs/8.10.1/firebase-database.js"></script>

    <style>
        /* --- Global Styles & Reset --- */
        :root {
            --primary-bg-start: #1a1a2e; --primary-bg-end: #162447; --secondary-bg: rgba(22, 36, 71, 0.8); --accent-color: #e43f5a; --accent-hover: #c33049; --text-color: #e0e0e0; --text-muted-color: #a0a0a0; --coin-color: #f7b731; --icon-color: #a0a0a0; --icon-active-color: #ffffff; --button-bg-start: #1f4068; --button-bg-end: #2a5a8a; --button-hover-bg-start: #2a5a8a; --button-hover-bg-end: #3b7cb8; --success-color: #4caf50; --warning-color: #ff9800; --error-color: #f44336; --disabled-bg: #444; --disabled-text: #888; --shadow-color: rgba(0, 0, 0, 0.3); --glow-color: rgba(247, 183, 49, 0.6);
        }
        * { box-sizing: border-box; margin: 0; padding: 0; -webkit-tap-highlight-color: transparent; }
        html, body { height: 100%; width: 100%; overflow: hidden; font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; background: linear-gradient(135deg, var(--primary-bg-start), var(--primary-bg-end)); color: var(--text-color); overscroll-behavior: none; font-size: 16px; }
        body { display: flex; flex-direction: column; touch-action: manipulation; }
        #app { display: flex; flex-direction: column; height: 100%; width: 100%; overflow: hidden; }
        #loading { display: flex; flex-direction: column; justify-content: center; align-items: center; height: 100%; font-size: 1.5em; color: var(--text-color); text-align: center; padding: 20px; }
        #main-content { flex-grow: 1; display: flex; overflow: hidden; }
        .page { width: 100%; height: 100%; display: none; flex-direction: column; flex-grow: 1; overflow-y: auto; /* Enables scrolling per page */ -webkit-overflow-scrolling: touch; padding: 20px 15px 85px 15px; /* Padding bottom for nav */ scroll-behavior: smooth; }
        .page.active { display: flex; }
        nav { position: fixed; bottom: 0; left: 0; width: 100%; display: flex; justify-content: space-around; align-items: center; background-color: rgba(15, 23, 42, 0.85); border-top: 1px solid var(--accent-color); padding: 8px 0; backdrop-filter: blur(5px); -webkit-backdrop-filter: blur(5px); z-index: 100; box-shadow: 0 -2px 10px var(--shadow-color); }
        nav button { background: none; border: none; color: var(--icon-color); cursor: pointer; display: flex; flex-direction: column; align-items: center; font-size: 0.7em; padding: 5px 10px; transition: color 0.2s ease; flex-grow: 1; flex-basis: 0; }
        nav button .material-icons { font-size: 26px; margin-bottom: 3px; }
        nav button:hover { color: var(--icon-active-color); }
        nav button.active { color: var(--accent-color); }
        #game-screen { justify-content: space-between; align-items: center; text-align: center; padding-top: 10px; }
        .stats-bar { display: flex; justify-content: space-around; width: 100%; max-width: 350px; margin-bottom: 10px; font-size: 0.85em; color: var(--text-muted-color); background-color: var(--secondary-bg); padding: 8px 10px; border-radius: 10px; box-shadow: 0 1px 3px var(--shadow-color); }
        .stat-item { display: flex; align-items: center; gap: 5px; }
        .stat-item .material-icons { font-size: 16px; color: var(--coin-color); }
        .coin-balance-container { display: flex; align-items: center; justify-content: center; margin-bottom: 15px; }
        #coin-icon-balance { width: 30px; height: 30px; margin-right: 8px; vertical-align: middle; }
        #coin-balance { font-size: 2.2em; font-weight: bold; color: var(--coin-color); text-shadow: 0 0 8px var(--glow-color); }
        .coin-area { flex-grow: 1; display: flex; justify-content: center; align-items: center; width: 100%; margin-bottom: 10px; }
        #coin-container { position: relative; width: clamp(180px, 50vmin, 250px); height: clamp(180px, 50vmin, 250px); cursor: pointer; user-select: none; -webkit-user-drag: none; border-radius: 50%; }
        #coin-image { width: 100%; height: 100%; transition: transform 0.08s ease-out; border-radius: 50%; box-shadow: 0 0 30px var(--glow-color); filter: drop-shadow(0 5px 15px var(--shadow-color)); }
        #coin-container:active #coin-image { transform: scale(0.94); filter: drop-shadow(0 2px 8px var(--shadow-color)); }
        #click-feedback { position: fixed; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; overflow: hidden; z-index: 99; }
        .click-value { position: absolute; font-size: clamp(1.2em, 4vw, 1.8em); font-weight: bold; color: var(--coin-color); user-select: none; pointer-events: none; animation: floatUpFadeOut 1.2s ease-out forwards; white-space: nowrap; text-shadow: 1px 1px 2px rgba(0,0,0,0.5); }
        @keyframes floatUpFadeOut { 0% { opacity: 1; transform: translateY(0) scale(1); } 100% { opacity: 0; transform: translateY(-70px) scale(0.8); } }
        #shop-screen h2, #profile-screen h2, #tasks-screen h2 { text-align: center; margin-bottom: 25px; color: var(--accent-color); font-size: 1.6em; text-shadow: 1px 1px 2px var(--shadow-color); }
        .shop-tabs { display: flex; justify-content: center; margin-bottom: 25px; border-bottom: 1px solid rgba(255, 255, 255, 0.1); position: sticky; top: -20px; /* Sticky tabs */ background: linear-gradient(135deg, var(--primary-bg-start), var(--primary-bg-end)); padding-top: 15px; z-index: 10; }
        .shop-tabs button { background: none; border: none; color: var(--icon-color); padding: 12px 20px; cursor: pointer; font-size: 1em; font-weight: 500; border-bottom: 3px solid transparent; margin-bottom: -1px; transition: color 0.2s ease, border-color 0.2s ease; }
        .shop-tabs button:hover { color: var(--icon-active-color); }
        .shop-tabs button.active { color: var(--accent-color); border-bottom-color: var(--accent-color); }
        .shop-category { display: none; flex-direction: column; gap: 12px; /* This is the container for shop items */ }
        .shop-category.active { display: flex; }
        .shop-item { background-color: var(--secondary-bg); padding: 15px; border-radius: 10px; display: flex; justify-content: space-between; align-items: center; gap: 12px; box-shadow: 0 3px 8px var(--shadow-color); border: 1px solid rgba(255, 255, 255, 0.05); }
        .shop-item-info { flex-grow: 1; }
        .shop-item-name { font-weight: 600; font-size: 1.05em; margin-bottom: 4px; color: var(--text-color); }
        .shop-item-details { font-size: 0.85em; color: var(--text-muted-color); margin-bottom: 8px; }
        .shop-item-cost { display: flex; align-items: center; gap: 5px; font-weight: bold; color: var(--coin-color); font-size: 0.95em; }
        .shop-item-cost img { width: 16px; height: 16px; }
        .buy-button { background: linear-gradient(135deg, var(--button-bg-start), var(--button-bg-end)); color: var(--text-color); border: none; padding: 10px 18px; border-radius: 8px; cursor: pointer; font-weight: 600; font-size: 0.9em; transition: background 0.2s ease, transform 0.1s ease, box-shadow 0.2s ease; white-space: nowrap; box-shadow: 0 2px 5px rgba(0,0,0, 0.2); }
        .buy-button:hover:not(:disabled) { background: linear-gradient(135deg, var(--button-hover-bg-start), var(--button-hover-bg-end)); box-shadow: 0 4px 8px rgba(0,0,0, 0.3); }
        .buy-button:active:not(:disabled) { transform: scale(0.97); }
        .buy-button:disabled { background: var(--disabled-bg); color: var(--disabled-text); cursor: not-allowed; box-shadow: none; opacity: 0.7;}
        .profile-section { background-color: var(--secondary-bg); padding: 20px; border-radius: 12px; margin-bottom: 20px; box-shadow: 0 4px 10px var(--shadow-color); border: 1px solid rgba(255, 255, 255, 0.05); }
        .profile-info p { margin-bottom: 12px; font-size: 1em; line-height: 1.5; word-break: break-all; display: flex; align-items: center; flex-wrap: wrap; }
        .profile-info p strong { color: var(--coin-color); margin-right: 8px; min-width: 120px; display: inline-block; }
        .profile-info p span { flex-grow: 1; }
        .wallet-section label, .lucky-code-section label { display: block; margin-bottom: 10px; font-weight: 600; color: var(--text-muted-color); }
        #ton-wallet-input, #lucky-code-input { width: 100%; padding: 12px; margin-bottom: 15px; border-radius: 8px; border: 1px solid rgba(255, 255, 255, 0.1); background-color: rgba(0, 0, 0, 0.2); color: var(--text-color); font-size: 1em; }
        #save-wallet-button { /* Inherits .task-button styles now */ background: linear-gradient(135deg, var(--accent-color), var(--accent-hover)); color: white; border: none; padding: 12px 20px; border-radius: 8px; cursor: pointer; font-weight: bold; width: 100%; font-size: 1em; transition: background 0.2s ease, transform 0.1s ease; box-shadow: 0 2px 5px rgba(0,0,0, 0.2); }
        #save-wallet-button:hover { background: linear-gradient(135deg, var(--accent-hover), var(--accent-color)); box-shadow: 0 4px 8px rgba(0,0,0, 0.3); }
        #save-wallet-button:active { transform: scale(0.98); }
        #save-status, #lucky-code-status { margin-top: 12px; text-align: center; font-size: 0.9em; height: 1.2em; font-weight: 500; }
        #save-status { color: var(--success-color); }
        #lucky-code-status { color: var(--warning-color); }
        #lucky-code-status.success { color: var(--success-color); }
        #lucky-code-status.claimed { color: var(--coin-color); }
        .mission-section { text-align: center; }
        .mission-title { font-size: 1.2em; font-weight: 600; margin-bottom: 10px; color: var(--text-color); }
        .mission-description { font-size: 0.95em; color: var(--text-muted-color); margin-bottom: 15px; line-height: 1.5; }
        .mission-emoji { font-size: 2em; margin: 0 5px; display: inline-block; cursor: default; }
        .copy-emoji-button { background: none; border: 1px solid var(--accent-color); color: var(--accent-color); padding: 5px 10px; font-size: 0.8em; border-radius: 5px; cursor: pointer; margin-left: 10px; transition: background-color 0.2s ease, color 0.2s ease; }
        .copy-emoji-button:hover { background-color: var(--accent-color); color: white; }
        .mission-status { font-weight: bold; margin: 15px 0; font-size: 1em; }
        .mission-status.incomplete { color: var(--text-muted-color); }
        .mission-status.claimed { color: var(--coin-color); }
        .mission-action-button { /* Inherits .task-button styles */ background: linear-gradient(135deg, var(--button-bg-start), var(--button-bg-end)); color: var(--text-color); border: none; padding: 10px 25px; border-radius: 8px; cursor: pointer; font-weight: 600; font-size: 0.95em; transition: background 0.2s ease, transform 0.1s ease, box-shadow 0.2s ease; box-shadow: 0 2px 5px rgba(0,0,0, 0.2); }
        .mission-action-button:hover:not(:disabled) { background: linear-gradient(135deg, var(--button-hover-bg-start), var(--button-hover-bg-end)); box-shadow: 0 4px 8px rgba(0,0,0, 0.3); }
        .mission-action-button:active:not(:disabled) { transform: scale(0.97); }
        .mission-action-button:disabled { background: var(--disabled-bg); color: var(--disabled-text); cursor: not-allowed; box-shadow: none; opacity: 0.7; }
        .reward-display { display: flex; align-items: center; justify-content: center; gap: 5px; font-weight: bold; color: var(--coin-color); margin-top: 5px; }
        .fine-applied { color: var(--error-color); font-weight: bold; margin-top: 10px; font-size: 0.9em; }
        .coin-icon { width: 1em; height: 1em; vertical-align: middle; margin: 0 2px; }
        @keyframes shake { 10%, 90% { transform: translate3d(-1px, 0, 0); } 20%, 80% { transform: translate3d(2px, 0, 0); } 30%, 50%, 70% { transform: translate3d(-3px, 0, 0); } 40%, 60% { transform: translate3d(3px, 0, 0); } }
        #tasks-list { display: flex; flex-direction: column; gap: 15px; }
        .task-item { display: flex; gap: 15px; align-items: center; background-color: var(--secondary-bg); padding: 15px; border-radius: 10px; box-shadow: 0 3px 8px var(--shadow-color); border: 1px solid rgba(255, 255, 255, 0.05); transition: transform 0.2s ease; }
        .task-item:hover { transform: translateY(-2px); box-shadow: 0 5px 12px var(--shadow-color); }
        .task-item-image { width: 50px; height: 50px; border-radius: 8px; object-fit: cover; flex-shrink: 0; background-color: var(--primary-bg-start); }
        .task-item-info { flex-grow: 1; }
        .task-item-name { font-weight: 600; font-size: 1.05em; margin-bottom: 4px; color: var(--text-color); }
        .task-item-description { font-size: 0.85em; color: var(--text-muted-color); margin-bottom: 8px; line-height: 1.4; }
        .task-item-reward { display: flex; align-items: center; gap: 5px; font-weight: bold; color: var(--coin-color); font-size: 0.95em; }
        .task-item-reward img { width: 16px; height: 16px; }
        .task-actions { display: flex; flex-direction: column; align-items: flex-end; gap: 8px; flex-shrink: 0; }
        .task-button { background: linear-gradient(135deg, var(--button-bg-start), var(--button-bg-end)); color: var(--text-color); border: none; padding: 8px 15px; border-radius: 8px; cursor: pointer; font-weight: 600; font-size: 0.85em; transition: background 0.2s ease, transform 0.1s ease, box-shadow 0.2s ease; white-space: nowrap; box-shadow: 0 2px 5px rgba(0,0,0, 0.2); }
        .task-button:hover:not(:disabled) { background: linear-gradient(135deg, var(--button-hover-bg-start), var(--button-hover-bg-end)); box-shadow: 0 4px 8px rgba(0,0,0, 0.3); }
        .task-button:active:not(:disabled) { transform: scale(0.97); }
        .task-button:disabled { background: var(--disabled-bg); color: var(--disabled-text); cursor: not-allowed; box-shadow: none; opacity: 0.7; }
        .verify-task-btn, .task-claimed-status { display: none; }
        .task-claimed-status { font-size: 0.9em; font-weight: bold; color: var(--success-color); }
        .task-item[data-completed="true"] .start-task-btn, .task-item[data-completed="true"] .verify-task-btn { display: none; }
        .task-item[data-completed="true"] .task-claimed-status { display: block; }
        .task-item[data-status="verifying"] .start-task-btn { display: none; }
        .task-item[data-status="verifying"] .verify-task-btn { display: block; }
        .modal-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.7); display: none; justify-content: center; align-items: center; z-index: 1000; backdrop-filter: blur(3px); -webkit-backdrop-filter: blur(3px); animation: fadeIn 0.3s ease-out; }
        .modal-overlay.visible { display: flex; }
        .modal-content { background: linear-gradient(135deg, var(--primary-bg-start), var(--primary-bg-end)); padding: 25px; border-radius: 12px; box-shadow: 0 5px 20px rgba(0,0,0,0.4); border: 1px solid rgba(255, 255, 255, 0.1); width: 90%; max-width: 400px; text-align: center; animation: slideIn 0.3s ease-out; }
        .modal-title { font-size: 1.3em; font-weight: 600; color: var(--accent-color); margin-bottom: 15px; }
        .modal-description { font-size: 0.95em; color: var(--text-muted-color); margin-bottom: 20px; }
        .modal-input { width: 100%; padding: 12px; margin-bottom: 20px; border-radius: 8px; border: 1px solid rgba(255, 255, 255, 0.1); background-color: rgba(0, 0, 0, 0.2); color: var(--text-color); font-size: 1em; text-align: center; }
        .modal-actions { display: flex; gap: 10px; justify-content: center; }
        .modal-button { /* Uses .task-button styles */ padding: 10px 20px; font-size: 0.9em; }
        .modal-button.cancel { background: var(--disabled-bg); }
        .modal-button.cancel:hover { background: #555; }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideIn { from { transform: translateY(-20px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
        .lucky-code-section { text-align: center; }
        #lucky-code-input { text-align: center; margin-bottom: 10px; text-transform: uppercase; }
        #claim-lucky-code-btn { /* Uses .task-button styles */ width: 100%; padding: 12px 20px; font-size: 1em; }

    </style>
</head>
<body>
    <div id="app">
        <!-- Loading Indicator -->
        <div id="loading">Initializing Meme Wolf...</div>

        <!-- Main Content Area (Initially Hidden) -->
        <div id="main-content" style="display: none;">

            <!-- Page: Game -->
            <div id="game-screen" class="page active">
                 <div class="stats-bar">
                     <div class="stat-item" title="Coins per tap"><span class="material-icons">touch_app</span> <span id="tap-power-display">1</span></div>
                     <div class="stat-item" title="Profit per hour"><span class="material-icons">hourglass_bottom</span> <span id="passive-income-display">0</span>/hr</div>
                 </div>
                <div class="coin-balance-container"><img id="coin-icon-balance" src="https://preview--ab-wallet-tap-power.lovable.app/lovable-uploads/3a2a084b-4cf2-4293-8e80-3f202d4abe87.png" alt="Coin"> <span id="coin-balance">0</span></div>
                <div class="coin-area"><div id="coin-container"><img id="coin-image" src="https://preview--ab-wallet-tap-power.lovable.app/lovable-uploads/3a2a084b-4cf2-4293-8e80-3f202d4abe87.png" alt="Tap Me!"></div></div>
                <div id="click-feedback"></div>
            </div>

            <!-- Page: Shop -->
            <div id="shop-screen" class="page">
                <h2>Upgrades Shop</h2>
                <div class="shop-tabs">
                    <button id="tab-click" class="active" onclick="showShopCategory('click-upgrades')">Click Power</button>
                    <button id="tab-passive" onclick="showShopCategory('passive-upgrades')">Passive Income</button>
                </div>
                <div id="click-upgrades" class="shop-category active"><p>Loading click upgrades...</p></div>
                <div id="passive-upgrades" class="shop-category"><p>Loading passive income upgrades...</p></div>
            </div>

            <!-- Page: Tasks -->
            <div id="tasks-screen" class="page">
                <h2>Available Tasks</h2>
                <div id="tasks-list">
                    <p>Loading tasks...</p>
                </div>
            </div>

            <!-- Page: Profile -->
            <div id="profile-screen" class="page">
                <h2>Profile & Wallet</h2>
                <!-- Profile Info Section -->
                <div class="profile-section profile-info">
                    <p><strong>User ID:</strong> <span id="profile-userid">N/A</span></p>
                    <p><strong>Username:</strong> <span id="profile-username">N/A</span></p>
                    <p><strong>First Name:</strong> <span id="profile-firstname">N/A</span></p>
                    <p><strong>Last Name:</strong> <span id="profile-lastname">N/A</span></p>
                    <p><strong>Total Coins:</strong> <span id="profile-coins">0</span> <img class="coin-icon" src="https://preview--ab-wallet-tap-power.lovable.app/lovable-uploads/3a2a084b-4cf2-4293-8e80-3f202d4abe87.png" alt=""></p>
                    <p><strong>Tap Power:</strong> <span id="profile-tap-power">1</span> / tap</p>
                    <p><strong>Passive Income:</strong> <span id="profile-passive-income">0</span> / hour</p>
                </div>
                <!-- Wolf Mission Section -->
                <div class="profile-section mission-section">
                    <div class="mission-title">🐺 Wolf Name Mission 🐺</div>
                    <p class="mission-description"> Add the wolf emoji <span class="mission-emoji" id="mission-emoji-display">🐺</span> to the *very end* of your Telegram Last Name! <button class="copy-emoji-button" id="copy-emoji-btn">Copy Emoji</button> </p>
                    <div class="mission-status incomplete" id="mission-status">Status: Checking...</div>
                    <div id="fine-message-display" class="fine-applied" style="display: none;"></div>
                    <button class="mission-action-button" id="mission-claim-btn" disabled>Check & Claim Reward</button>
                    <div class="reward-display"><span>Reward: 50K</span> <img src="https://preview--ab-wallet-tap-power.lovable.app/lovable-uploads/3a2a084b-4cf2-4293-8e80-3f202d4abe87.png" class="coin-icon" alt=""></div>
                </div>
                <!-- Daily Lucky Code Section -->
                <div class="profile-section lucky-code-section">
                    <label for="lucky-code-input">🎁 Daily Lucky Code</label>
                    <input type="text" id="lucky-code-input" placeholder="Enter Today's Code" maxlength="20">
                    <button id="claim-lucky-code-btn" class="task-button" disabled>Claim Reward</button>
                    <p id="lucky-code-status"></p>
                 </div>
                 <!-- Wallet Section -->
                <div class="profile-section wallet-section">
                    <label for="ton-wallet-input">TON Wallet Address:</label>
                    <input type="text" id="ton-wallet-input" placeholder="Enter your TON wallet address">
                    <button id="save-wallet-button" class="task-button">Save Wallet</button>
                    <p id="save-status"></p>
                </div>
            </div>
        </div>

        <!-- Navigation Bar -->
        <nav id="navbar" style="display: none;">
            <button id="nav-game" class="active" onclick="showPage('game-screen')"><span class="material-icons">pets</span><span>Game</span></button>
            <button id="nav-shop" onclick="showPage('shop-screen')"><span class="material-icons">shopping_bag</span><span>Shop</span></button>
            <button id="nav-tasks" onclick="showPage('tasks-screen')"><span class="material-icons">checklist</span><span>Tasks</span></button>
            <button id="nav-profile" onclick="showPage('profile-screen')"><span class="material-icons">account_circle</span><span>Profile</span></button>
        </nav>

        <!-- Code Input Modal -->
        <div id="code-popup" class="modal-overlay">
            <div class="modal-content">
                <h3 id="code-popup-title" class="modal-title">Enter Code</h3>
                <p id="code-popup-description" class="modal-description">Enter the code found after completing the task.</p>
                <input type="text" id="code-popup-input" class="modal-input" placeholder="Enter code here">
                <div class="modal-actions">
                    <button id="code-popup-cancel" class="modal-button task-button cancel">Cancel</button>
                    <button id="code-popup-submit" class="modal-button task-button">Submit Code</button>
                </div>
            </div>
        </div>
    </div>

    <script>
        // --- Config ---
        const firebaseConfig = { /* ... Your Firebase Config ... */
             apiKey: "AIzaSyCyH3Z92F8RQweInLC5w_bk_AaLx6XT7UE", authDomain: "ab-wallet-62482.firebaseapp.com", databaseURL: "https://ab-wallet-62482-default-rtdb.firebaseio.com", projectId: "ab-wallet-62482", storageBucket: "ab-wallet-62482.firebasestorage.app", messagingSenderId: "642030839072", appId: "1:642030839072:web:77fc92375ba72e2ee62345"
         };
        const COIN_IMAGE_URL = "https://preview--ab-wallet-tap-power.lovable.app/lovable-uploads/3a2a084b-4cf2-4293-8e80-3f202d4abe87.png";
        const BASE_TAP_EARN = 1; const SAVE_INTERVAL = 5000; const PASSIVE_INCOME_INTERVAL = 1000; const INCREASING_COST_BASE = 10000; const WOLF_MISSION_REWARD = 50000; const WOLF_EMOJI = '🐺'; const CHEAT_FINE = 100000;
        const TASK_VERIFICATION_DELAY = 10000;

        // --- Telegram & Firebase Vars ---
        let tg = null; let db = null; let currentUser = null; let userData = null; let lastSaveTime = 0; let saveTimeout = null; let passiveIncomeIntervalId = null; let isLoading = true;
        let availableTasks = {}; let currentCodeTaskId = null; let dailyLuckyCodeData = null;

        // --- DOM Elements ---
        const loadingDiv = document.getElementById('loading'); const mainContentDiv = document.getElementById('main-content'); const navbar = document.getElementById('navbar'); const coinBalanceSpan = document.getElementById('coin-balance'); const tapPowerDisplaySpan = document.getElementById('tap-power-display'); const passiveIncomeDisplaySpan = document.getElementById('passive-income-display'); const coinContainer = document.getElementById('coin-container'); const clickFeedbackDiv = document.getElementById('click-feedback'); const clickUpgradesDiv = document.getElementById('click-upgrades'); const passiveUpgradesDiv = document.getElementById('passive-upgrades'); const profileUserIdSpan = document.getElementById('profile-userid'); const profileUsernameSpan = document.getElementById('profile-username'); const profileFirstNameSpan = document.getElementById('profile-firstname'); const profileLastNameSpan = document.getElementById('profile-lastname'); const profileCoinsSpan = document.getElementById('profile-coins'); const profileTapPowerSpan = document.getElementById('profile-tap-power'); const profilePassiveIncomeSpan = document.getElementById('profile-passive-income'); const tonWalletInput = document.getElementById('ton-wallet-input'); const saveWalletButton = document.getElementById('save-wallet-button'); const saveStatusP = document.getElementById('save-status'); const missionEmojiDisplay = document.getElementById('mission-emoji-display'); const copyEmojiBtn = document.getElementById('copy-emoji-btn'); const missionStatusDiv = document.getElementById('mission-status'); const missionClaimBtn = document.getElementById('mission-claim-btn'); const fineMessageDisplay = document.getElementById('fine-message-display'); const navButtons = document.querySelectorAll('nav button'); const shopTabButtons = document.querySelectorAll('.shop-tabs button'); const shopCategories = document.querySelectorAll('.shop-category');
        const tasksListDiv = document.getElementById('tasks-list'); const codePopup = document.getElementById('code-popup'); const codePopupTitle = document.getElementById('code-popup-title'); const codePopupDescription = document.getElementById('code-popup-description'); const codePopupInput = document.getElementById('code-popup-input'); const codePopupCancelBtn = document.getElementById('code-popup-cancel'); const codePopupSubmitBtn = document.getElementById('code-popup-submit');
        const luckyCodeInput = document.getElementById('lucky-code-input'); const claimLuckyCodeBtn = document.getElementById('claim-lucky-code-btn'); const luckyCodeStatus = document.getElementById('lucky-code-status');

        // --- Upgrade Definitions ---
        const upgrades = [ /* Full list - Omitted for brevity */
             { id: 'click_1', name: 'Stronger Paws', description: '+1 coin per tap', baseCost: 10000, baseEffect: 1, type: 'click' }, { id: 'click_2', name: 'Sharper Claws', description: '+2 coins per tap', baseCost: 100000, baseEffect: 2, type: 'click' }, { id: 'click_3', name: 'Meme Energy', description: '+5 coins per tap', baseCost: 500000, baseEffect: 5, type: 'click' }, { id: 'click_4', name: 'Wolf Pack Call', description: '+10 coins per tap', baseCost: 2000000, baseEffect: 10, type: 'click' }, { id: 'click_5', name: 'Lunar Boost', description: '+25 coins per tap', baseCost: 10000000, baseEffect: 25, type: 'click' }, { id: 'click_6', name: 'Golden Howl', description: '+50 coins per tap', baseCost: 50000000, baseEffect: 50, type: 'click' }, { id: 'click_7', name: 'Diamond Fangs', description: '+100 coins per tap', baseCost: 250000000, baseEffect: 100, type: 'click' }, { id: 'click_8', name: 'Alpha Presence', description: '+200 coins per tap', baseCost: 1000000000, baseEffect: 200, type: 'click' }, { id: 'click_9', name: 'Meme Lord Aura', description: '+500 coins per tap', baseCost: 5000000000, baseEffect: 500, type: 'click' }, { id: 'click_10', name: 'Cosmic Wolf', description: '+1000 coins per tap', baseCost: 20000000000, baseEffect: 1000, type: 'click' },
             { id: 'passive_1', name: 'Sniffing Out Coins', description: '+100 profit/hour', baseCost: 10000, baseEffect: 100, type: 'passive' }, { id: 'passive_2', name: 'Digging Spot', description: '+250 profit/hour', baseCost: 50000, baseEffect: 250, type: 'passive' }, { id: 'passive_3', name: 'Buried Treasure Map', description: '+600 profit/hour', baseCost: 150000, baseEffect: 600, type: 'passive' }, { id: 'passive_4', name: 'Meme Stash', description: '+1,500 profit/hour', baseCost: 500000, baseEffect: 1500, type: 'passive' }, { id: 'passive_5', name: 'Coin Tree Sapling', description: '+3,500 profit/hour', baseCost: 1500000, baseEffect: 3500, type: 'passive' }, { id: 'passive_6', name: 'Howling ATM', description: '+8,000 profit/hour', baseCost: 5000000, baseEffect: 8000, type: 'passive' }, { id: 'passive_7', name: 'Loyal Pack Tribute', description: '+18,000 profit/hour', baseCost: 15000000, baseEffect: 18000, type: 'passive' }, { id: 'passive_8', name: 'Wolf Den Bank', description: '+40,000 profit/hour', baseCost: 50000000, baseEffect: 40000, type: 'passive' }, { id: 'passive_9', name: 'Meme Coin Mine', description: '+90,000 profit/hour', baseCost: 150000000, baseEffect: 90000, type: 'passive' }, { id: 'passive_10', name: 'Moonlit Mint', description: '+200K profit/hour', baseCost: 500000000, baseEffect: 200000, type: 'passive' }, { id: 'passive_11', name: 'Crypto Kennel', description: '+450K profit/hour', baseCost: 1200000000, baseEffect: 450000, type: 'passive' }, { id: 'passive_12', name: 'Decentralized Den', description: '+1M profit/hour', baseCost: 3000000000, baseEffect: 1000000, type: 'passive' }, { id: 'passive_13', name: 'Blockchain Burrow', description: '+2.2M profit/hour', baseCost: 7000000000, baseEffect: 2200000, type: 'passive' }, { id: 'passive_14', name: 'Wolf Street Journal', description: '+5M profit/hour', baseCost: 15000000000, baseEffect: 5000000, type: 'passive' }, { id: 'passive_15', name: 'Golden Bone Fund', description: '+11M profit/hour', baseCost: 35000000000, baseEffect: 11000000, type: 'passive' }, { id: 'passive_16', name: 'Diamond Paw Trust', description: '+25M profit/hour', baseCost: 80000000000, baseEffect: 25000000, type: 'passive' }, { id: 'passive_17', name: 'Alpha Investment Group', description: '+55M profit/hour', baseCost: 180000000000, baseEffect: 55000000, type: 'passive' }, { id: 'passive_18', name: 'Meme Hegemony', description: '+120M profit/hour', baseCost: 400000000000, baseEffect: 120000000, type: 'passive' }, { id: 'passive_19', name: 'Lunar Treasury', description: '+250M profit/hour', baseCost: 900000000000, baseEffect: 250000000, type: 'passive' }, { id: 'passive_20', name: 'Cosmic Coin Flow', description: '+500M profit/hour', baseCost: 2000000000000, baseEffect: 500000000, type: 'passive' },
        ];

        // --- Initialization ---
        window.onload = () => {
             try {
                 isLoading = true; loadingDiv.textContent = "Initializing Meme Wolf...";
                 tg = window.Telegram.WebApp; tg.ready(); tg.expand();
                 try { const bgColor = getComputedStyle(document.documentElement).getPropertyValue('--primary-bg-end').trim(); tg.setHeaderColor(bgColor); tg.setBackgroundColor(bgColor); } catch (themeError) { console.warn("Could not set theme colors:", themeError); }
                 if (!tg.initDataUnsafe || !tg.initDataUnsafe.user) { loadingDiv.textContent = "Error: User data unavailable. Please launch from Telegram."; loadingDiv.style.color = 'var(--error-color)'; console.error("Critical: Telegram user data missing."); return; }
                 currentUser = tg.initDataUnsafe.user;
                 firebase.initializeApp(firebaseConfig); db = firebase.database();
                 loadUserDataAndInit();
                 setupEventListeners();
             } catch (error) { console.error("Critical Initialization Error:", error); showError(`Initialization failed: ${error.message}. Please try reloading.`); }
        };

        // --- Popup Helpers ---
        function showPopup(params) { if (tg) { try { tg.showPopup(params); } catch(e){ console.warn("Popup failed:", e); alert(`${params.title}\n\n${params.message}`); } } else { alert(`${params.title}\n\n${params.message}`); } }
        function showInfoPopup(title, message) { showPopup({ title: title || "Info", message: message, buttons: [{ type: "ok" }] }); }
        function showWarningPopup(title, message) { showPopup({ title: title || "⚠️ Warning", message: message, buttons: [{ type: "ok" }] }); }
        function showRewardPopup(title, message) { showPopup({ title: title || "🎉 Reward!", message: message, buttons: [{ type: "ok" }] }); }

        // --- Firebase Functions ---
        function loadUserDataAndInit() {
             if (!currentUser || !db) { showError("User/DB not ready."); return; }
             const userId = currentUser.id.toString(); const userRef = db.ref('users/' + userId);
             loadingDiv.textContent = "Loading your progress...";
             userRef.once('value').then((snapshot) => {
                 const defaultData = { coins: 0, upgrades: {}, missions: { lastNameWolf: 'incomplete' }, completedTasks: {}, lastLuckyCodeClaim: null, tonWallet: '', lastUpdate: Date.now(), telegramInfo: { id: currentUser.id, username: currentUser.username || null, firstName: currentUser.first_name || '', lastName: currentUser.last_name || '' } };
                 if (snapshot.exists()) {
                     userData = snapshot.val();
                     userData.coins = userData.coins ?? defaultData.coins; userData.upgrades = userData.upgrades ?? defaultData.upgrades; userData.missions = userData.missions ?? defaultData.missions; userData.missions.lastNameWolf = userData.missions.lastNameWolf ?? defaultData.missions.lastNameWolf; userData.completedTasks = userData.completedTasks ?? defaultData.completedTasks; userData.lastLuckyCodeClaim = userData.lastLuckyCodeClaim ?? defaultData.lastLuckyCodeClaim; userData.tonWallet = userData.tonWallet ?? defaultData.tonWallet; userData.lastUpdate = userData.lastUpdate ?? defaultData.lastUpdate; userData.telegramInfo = defaultData.telegramInfo;
                 } else { console.log("New user detected:", userId); userData = defaultData; saveUserData(true); }
                 const cheatDetected = performAntiCheatCheck();
                 if (!cheatDetected) { calculateOfflineProgress(); } else { userData.lastUpdate = Date.now(); }
                 return Promise.all([loadAndDisplayTasks(), loadDailyLuckyCode()]);
             }).then(() => {
                 initializeAppUI(); startPassiveIncome(); isLoading = false; console.log("App Ready.");
             }).catch((error) => { /* ... Robust error handling ... */
                 console.error("------------------------------------"); console.error("Firebase Load/Init Error Occurred:"); console.error("Full Error Object:", error); console.error("Error Code:", error?.code); console.error("Error Message:", error?.message); console.error("------------------------------------"); let displayMessage = `Failed to load data. Check connection & reload.`; if (error?.code) { displayMessage += ` (Code: ${error.code})`; } if (String(error).includes('WebAppPopupOpened')) { console.warn("Suppressed 'WebAppPopupOpened' from user display."); } showError(displayMessage); isLoading = false;
             });
        }

        function loadDailyLuckyCode() {
             if (!db) return Promise.reject("DB not ready for lucky code"); console.log("Loading daily code...");
             return db.ref('dailyLuckyCode').once('value').then(snapshot => {
                 dailyLuckyCodeData = snapshot.exists() ? snapshot.val() : null;
                 console.log("Daily code data:", dailyLuckyCodeData);
             }).catch(error => { console.error("Error loading daily code:", error); dailyLuckyCodeData = null; });
        }

        function saveUserData(force = false) {
             if (isLoading || !currentUser || !db || !userData) return; const now = Date.now(); userData.lastUpdate = now; clearTimeout(saveTimeout);
             if (force || now - lastSaveTime > SAVE_INTERVAL) {
                 console.log("Saving data..."); const userId = currentUser.id.toString(); userData.telegramInfo = { id: currentUser.id, username: currentUser.username || null, firstName: currentUser.first_name || '', lastName: currentUser.last_name || '' };
                 db.ref('users/' + userId).set(userData).then(() => { console.log("Data saved."); lastSaveTime = now; }).catch((error) => console.error("Firebase Save Error:", error));
             } else { saveTimeout = setTimeout(() => saveUserData(true), SAVE_INTERVAL - (now - lastSaveTime)); }
        }

        // --- Anti-Cheat Logic ---
        function performAntiCheatCheck() {
            if (!userData || !currentUser) return false; const missionId = 'lastNameWolf'; const missionStatus = userData.missions?.[missionId]; const currentLastName = currentUser.last_name || ''; fineMessageDisplay.style.display = 'none';
            if (missionStatus === 'claimed' && !currentLastName.endsWith(WOLF_EMOJI)) {
                const fineAmount = CHEAT_FINE; userData.coins = Math.max(0, userData.coins - fineAmount); userData.missions[missionId] = 'incomplete'; console.warn(`Anti-cheat: ${currentUser.id}. Fine: ${fineAmount}`);
                showWarningPopup("🚨 Cheating Detected!", `You removed the ${WOLF_EMOJI} emoji! Fine: ${formatNumber(fineAmount)} coins.`);
                fineMessageDisplay.textContent = `Fine Applied: -${formatNumber(fineAmount)} coins.`; fineMessageDisplay.style.display = 'block';
                return true;
            } return false;
        }

        // --- Game Logic ---
        function handleTap(event) { if (isLoading || !userData) return; const tapValue = calculateTapPower(); userData.coins += tapValue; let clientX, clientY; if (event.touches && event.touches.length > 0) { for (let i = 0; i < event.touches.length; i++) { clientX = event.touches[i].clientX; clientY = event.touches[i].clientY; createClickAnimation(clientX, clientY, tapValue); } } else { clientX = event.clientX; clientY = event.clientY; createClickAnimation(clientX, clientY, tapValue); } updateCoinDisplay(); scheduleSave(); }
        function calculateTapPower() { let power = BASE_TAP_EARN; if (userData?.upgrades) { for (const upgradeId in userData.upgrades) { const upgradeDef = upgrades.find(u => u.id === upgradeId && u.type === 'click'); if (upgradeDef) { power += (upgradeDef.baseEffect || 0) * (userData.upgrades[upgradeId]?.level || 0); } } } return power; }
        function calculatePassiveIncomeRate() { let rate = 0; if (userData?.upgrades) { for (const upgradeId in userData.upgrades) { const upgradeDef = upgrades.find(u => u.id === upgradeId && u.type === 'passive'); if (upgradeDef) { rate += (upgradeDef.baseEffect || 0) * (userData.upgrades[upgradeId]?.level || 0); } } } return rate; }
        function applyPassiveIncome() { if (isLoading || !userData) return; const hourlyRate = calculatePassiveIncomeRate(); const incomePerTick = hourlyRate / 3600 * (PASSIVE_INCOME_INTERVAL / 1000); if (incomePerTick > 0) { userData.coins += incomePerTick; updateCoinDisplay(); } }
        function startPassiveIncome() { if (passiveIncomeIntervalId) clearInterval(passiveIncomeIntervalId); passiveIncomeIntervalId = setInterval(applyPassiveIncome, PASSIVE_INCOME_INTERVAL); }
        function scheduleSave() { saveUserData(); }
        function calculateOfflineProgress() {
            if (!userData || !userData.lastUpdate) return; const now = Date.now(); const offlineSeconds = Math.max(0, Math.floor((now - userData.lastUpdate) / 1000)); if (offlineSeconds < 10) return;
            const hourlyRate = calculatePassiveIncomeRate(); const offlineIncome = (hourlyRate / 3600) * offlineSeconds;
            if (offlineIncome > 0) { userData.coins += offlineIncome; console.log(`Offline income: ${formatNumber(offlineIncome)} for ${offlineSeconds}s.`); showRewardPopup("Welcome Back!", `You earned ${formatNumber(offlineIncome)} ${WOLF_EMOJI} coins while away!`); }
            // No need to update lastUpdate here, will be updated on next save
        }

        // --- Mission Logic ---
        function checkAndClaimMission() { if (isLoading || !userData || !currentUser) return; const missionId = 'lastNameWolf'; const currentStatus = userData.missions?.[missionId] || 'incomplete'; const lastName = currentUser.last_name || ''; if (currentStatus === 'claimed') { showInfoPopup("Already Claimed", "Wolf Name Mission reward already claimed."); updateMissionUI(missionId, 'claimed', false); return; } const isConditionMet = lastName.endsWith(WOLF_EMOJI); if (isConditionMet) { userData.coins += WOLF_MISSION_REWARD; userData.missions[missionId] = 'claimed'; console.log(`Mission '${missionId}' claimed.`); showRewardPopup("Mission Complete!", `Earned ${formatNumber(WOLF_MISSION_REWARD)} coins!`); updateMissionUI(missionId, 'claimed', false); updateUI(); saveUserData(true); } else { updateMissionUI(missionId, 'incomplete', false); showInfoPopup("Mission Incomplete", `Add ${WOLF_EMOJI} to the end of your Telegram Last Name.`); } }
        function copyMissionEmoji() { navigator.clipboard.writeText(WOLF_EMOJI).then(() => { copyEmojiBtn.textContent = 'Copied!'; setTimeout(() => { copyEmojiBtn.textContent = 'Copy Emoji'; }, 1500); }).catch(err => { console.error('Failed to copy emoji: ', err); }); }

        // --- Task Logic ---
        function loadAndDisplayTasks() { if (!db) return Promise.reject("DB missing"); tasksListDiv.innerHTML = '<p>Loading tasks...</p>'; return db.ref('tasks').once('value').then(snapshot => { tasksListDiv.innerHTML = ''; availableTasks = {}; let hasTasks = false; if (snapshot.exists()) { availableTasks = snapshot.val() || {}; for (const taskId in availableTasks) { if (Object.hasOwnProperty.call(availableTasks, taskId)) { renderTaskItem(availableTasks[taskId], taskId); hasTasks = true; } } } if (!hasTasks) { tasksListDiv.innerHTML = '<p>No tasks available right now.</p>'; } }).catch(error => { console.error("Error loading tasks:", error); tasksListDiv.innerHTML = '<p style="color: var(--error-color);">Could not load tasks.</p>'; availableTasks = {}; }); }
        function renderTaskItem(taskData, taskId) { if (!taskData || !taskId) return; const isCompleted = userData?.completedTasks?.[taskId] === true; const itemDiv = document.createElement('div'); itemDiv.className = 'task-item'; itemDiv.dataset.taskId = taskId; itemDiv.dataset.completed = isCompleted; const imageUrl = taskData.imageUrl || `https://via.placeholder.com/50/1a1a2e/e0e0e0?text=${(taskData.name||'T')[0]}`; const description = taskData.description || (taskData.type === 'link' ? 'Complete the linked action.' : 'Complete and enter code.'); itemDiv.innerHTML = ` <img src="${imageUrl}" alt="" class="task-item-image" onerror="this.style.display='none'"> <div class="task-item-info"> <div class="task-item-name">${taskData.name || 'Unnamed Task'}</div> <div class="task-item-description">${description}</div> <div class="task-item-reward"> <img src="${COIN_IMAGE_URL}" class="coin-icon" alt=""> <span>+${formatNumber(taskData.reward || 0)}</span> </div> </div> <div class="task-actions"> <button class="task-button start-task-btn">Start</button> <button class="task-button verify-task-btn">Verify</button> <span class="task-claimed-status">Claimed</span> </div>`; const startBtn = itemDiv.querySelector('.start-task-btn'); const verifyBtn = itemDiv.querySelector('.verify-task-btn'); const claimedStatus = itemDiv.querySelector('.task-claimed-status'); if (isCompleted) { startBtn.style.display = 'none'; verifyBtn.style.display = 'none'; claimedStatus.style.display = 'block'; } else { startBtn.style.display = 'block'; verifyBtn.style.display = 'none'; claimedStatus.style.display = 'none'; startBtn.addEventListener('click', handleStartTaskClick); verifyBtn.addEventListener('click', handleVerifyTaskClick); } tasksListDiv.appendChild(itemDiv); }
        function handleStartTaskClick(event) { if (isLoading || !userData) return; const button = event.target; const taskItem = button.closest('.task-item'); const taskId = taskItem.dataset.taskId; const taskData = availableTasks[taskId]; if (!taskData) return; if (userData.completedTasks?.[taskId]) { showInfoPopup("Already Completed", "This task is already completed."); return; } if (taskData.link) { try { tg.openLink(taskData.link); } catch (e) { console.warn("tg.openLink failed, using window.open:", e); window.open(taskData.link, '_blank');} } else if (taskData.type === 'link') { showWarningPopup("Task Error", "Task link is missing."); return; } button.disabled = true; if (taskData.type === 'link') { taskItem.dataset.status = 'verifying'; const verifyBtn = taskItem.querySelector('.verify-task-btn'); verifyBtn.style.display = 'block'; verifyBtn.disabled = true; verifyBtn.textContent = `Verify (${TASK_VERIFICATION_DELAY / 1000}s)`; let countdown = TASK_VERIFICATION_DELAY / 1000; const intervalId = setInterval(() => { countdown--; if (countdown > 0) { verifyBtn.textContent = `Verify (${countdown}s)`; } else { clearInterval(intervalId); verifyBtn.textContent = 'Verify'; verifyBtn.disabled = false; } }, 1000); } else if (taskData.type === 'code') { showCodePopup(taskId, taskData); button.disabled = false; } else { button.disabled = false; showWarningPopup("Task Error", "Unknown task type."); } }
        function handleVerifyTaskClick(event) { if (isLoading || !userData) return; const button = event.target; const taskItem = button.closest('.task-item'); const taskId = taskItem.dataset.taskId; const taskData = availableTasks[taskId]; if (!taskData) return; if (userData.completedTasks?.[taskId]) return; button.disabled = true; button.textContent = "Verifying..."; console.log(`Verification successful (simulated): ${taskId}`); claimTaskReward(taskId, taskData.reward); }
        function showCodePopup(taskId, taskData) { currentCodeTaskId = taskId; codePopupTitle.textContent = taskData.name || "Enter Code"; codePopupDescription.textContent = taskData.description || "Enter the code."; codePopupInput.value = ''; codePopup.classList.add('visible'); codePopupInput.focus(); }
        function hideCodePopup() { codePopup.classList.remove('visible'); currentCodeTaskId = null; }
        function handleCodeSubmit() { if (!currentCodeTaskId || !availableTasks[currentCodeTaskId] || !userData) { hideCodePopup(); return; } const taskId = currentCodeTaskId; const taskData = availableTasks[taskId]; const submittedCode = codePopupInput.value.trim(); if (!submittedCode) { showWarningPopup("Input Error", "Please enter the code."); return; } /* !! SECURITY WARNING: Client-side check only !! */ if (taskData.code && submittedCode.toLowerCase() === taskData.code.toLowerCase()) { console.log(`Code verify OK: ${taskId}`); hideCodePopup(); claimTaskReward(taskId, taskData.reward); } else { showWarningPopup("Incorrect Code", "The code is incorrect."); codePopupInput.focus(); codePopupInput.select(); } }
        function claimTaskReward(taskId, rewardAmount) { if (isLoading || !userData || !taskId || rewardAmount === undefined) return; if (userData.completedTasks?.[taskId]) { console.warn(`Duplicate claim attempt: ${taskId}`); updateTaskItemUI(taskId, true); return; } userData.coins += rewardAmount; if (!userData.completedTasks) userData.completedTasks = {}; userData.completedTasks[taskId] = true; console.log(`Task ${taskId} complete. Reward: ${rewardAmount}`); showRewardPopup("Task Complete!", `+${formatNumber(rewardAmount)} coins!`); updateTaskItemUI(taskId, true); updateUI(); /* Update all UI */ saveUserData(true); }
        function updateTaskItemUI(taskId, isCompleted) { const taskItem = tasksListDiv.querySelector(`.task-item[data-task-id="${taskId}"]`); if (!taskItem) return; const startBtn = taskItem.querySelector('.start-task-btn'); const verifyBtn = taskItem.querySelector('.verify-task-btn'); const claimedStatus = taskItem.querySelector('.task-claimed-status'); taskItem.dataset.completed = isCompleted; taskItem.dataset.status = isCompleted ? 'completed' : 'pending'; if (isCompleted) { startBtn.style.display = 'none'; verifyBtn.style.display = 'none'; claimedStatus.style.display = 'block'; startBtn.removeEventListener('click', handleStartTaskClick); verifyBtn.removeEventListener('click', handleVerifyTaskClick); } else { startBtn.style.display = 'block'; verifyBtn.style.display = 'none'; claimedStatus.style.display = 'none'; startBtn.disabled = false; verifyBtn.disabled = true; verifyBtn.textContent = 'Verify'; startBtn.removeEventListener('click', handleStartTaskClick); startBtn.addEventListener('click', handleStartTaskClick); verifyBtn.removeEventListener('click', handleVerifyTaskClick); verifyBtn.addEventListener('click', handleVerifyTaskClick); } }

        // --- Daily Lucky Code Logic ---
        function updateLuckyCodeSectionUI() {
            if (!userData || !claimLuckyCodeBtn || !luckyCodeInput || !luckyCodeStatus) return;
            if (!dailyLuckyCodeData) { luckyCodeStatus.textContent = "Daily code unavailable."; luckyCodeInput.disabled = true; claimLuckyCodeBtn.disabled = true; claimLuckyCodeBtn.textContent = "Unavailable"; return; }
            const todayUTCString = new Date().toISOString().split('T')[0]; const lastClaimDate = userData.lastLuckyCodeClaim;
            if (lastClaimDate === todayUTCString) { luckyCodeStatus.textContent = `Claimed today!`; luckyCodeStatus.className = 'lucky-code-status claimed'; luckyCodeInput.disabled = true; claimLuckyCodeBtn.disabled = true; claimLuckyCodeBtn.textContent = "Claimed Today"; }
            else { luckyCodeStatus.textContent = ""; luckyCodeStatus.className = 'lucky-code-status'; luckyCodeInput.disabled = false; claimLuckyCodeBtn.disabled = false; claimLuckyCodeBtn.textContent = "Claim Reward"; }
        }
        function handleLuckyCodeClaim() {
            if (isLoading || !userData || !dailyLuckyCodeData) { showWarningPopup("Hold On!", "Code data not loaded."); return; }
            const todayUTCString = new Date().toISOString().split('T')[0]; if (userData.lastLuckyCodeClaim === todayUTCString) { showInfoPopup("Already Claimed", "Code claimed today."); updateLuckyCodeSectionUI(); return; }
            const enteredCode = luckyCodeInput.value.trim(); if (!enteredCode) { luckyCodeStatus.textContent = "Please enter code."; luckyCodeStatus.className = 'lucky-code-status'; return; }
            if (enteredCode.toLowerCase() === dailyLuckyCodeData.code.toLowerCase()) {
                const reward = dailyLuckyCodeData.reward || 0; userData.coins += reward; userData.lastLuckyCodeClaim = todayUTCString; console.log(`Lucky code claimed. +${reward}`);
                showRewardPopup("Code Accepted!", `+${formatNumber(reward)} lucky coins!`); luckyCodeInput.value = ''; updateUI(); saveUserData(true);
            } else { luckyCodeStatus.textContent = "Incorrect code."; luckyCodeStatus.className = 'lucky-code-status'; luckyCodeInput.focus(); luckyCodeInput.select(); claimLuckyCodeBtn.style.animation = 'shake 0.5s'; setTimeout(() => claimLuckyCodeBtn.style.animation = '', 500); }
        }

        // --- UI Functions ---
        function initializeAppUI() { missionEmojiDisplay.textContent = WOLF_EMOJI; renderShopItems(); updateUI(); loadingDiv.style.display = 'none'; mainContentDiv.style.display = 'flex'; navbar.style.display = 'flex'; }
        function updateUI() { if (isLoading || !userData || !currentUser) return; updateCoinDisplay(); updateGameStats(); updateShopItemsUI(); updateProfileStats(); updateMissionStatusUI(); updateLuckyCodeSectionUI(); }
        function updateCoinDisplay() { if (userData) coinBalanceSpan.textContent = formatNumber(userData.coins); }
        function updateGameStats() { if (!userData) return; tapPowerDisplaySpan.textContent = formatNumber(calculateTapPower()); passiveIncomeDisplaySpan.textContent = formatNumber(calculatePassiveIncomeRate()); }
        function updateProfileStats() { if (!userData || !currentUser) return; profileUserIdSpan.textContent = currentUser.id || 'N/A'; profileUsernameSpan.textContent = currentUser.username || 'N/A'; profileFirstNameSpan.textContent = currentUser.first_name || 'N/A'; profileLastNameSpan.textContent = currentUser.last_name || 'N/A'; profileCoinsSpan.textContent = formatNumber(userData.coins); profileTapPowerSpan.textContent = formatNumber(calculateTapPower()); profilePassiveIncomeSpan.textContent = formatNumber(calculatePassiveIncomeRate()); tonWalletInput.value = userData.tonWallet || ''; }
        function updateMissionStatusUI() { if (!userData || !currentUser) return; const missionId = 'lastNameWolf'; const status = userData?.missions?.[missionId] || 'incomplete'; const lastName = currentUser?.last_name || ''; const isConditionMet = lastName.endsWith(WOLF_EMOJI); updateMissionUI(missionId, status, isConditionMet); }
        function updateMissionUI(missionId, status, isConditionMet) { missionStatusDiv.classList.remove('incomplete', 'claimed'); missionStatusDiv.classList.add(status === 'claimed' ? 'claimed' : 'incomplete'); switch (status) { case 'incomplete': missionStatusDiv.textContent = 'Status: Incomplete'; missionClaimBtn.textContent = 'Check & Claim Reward'; missionClaimBtn.disabled = false; break; case 'claimed': missionStatusDiv.textContent = 'Status: Reward Claimed!'; missionClaimBtn.textContent = 'Claimed'; missionClaimBtn.disabled = true; break; } }
        function renderShopItems() { clickUpgradesDiv.innerHTML = ''; passiveUpgradesDiv.innerHTML = ''; if (!userData) { console.warn("Cannot render shop, userData missing."); return; } upgrades.forEach(upgrade => { const itemDiv = document.createElement('div'); itemDiv.className = 'shop-item'; itemDiv.id = `shop-item-${upgrade.id}`; const level = userData.upgrades?.[upgrade.id]?.level || 0; const cost = calculateUpgradeCost(upgrade, level); itemDiv.innerHTML = ` <div class="shop-item-info"> <div class="shop-item-name">${upgrade.name} (Lv. ${level})</div> <div class="shop-item-details">${upgrade.description}</div> <div class="shop-item-cost"> <img src="${COIN_IMAGE_URL}" class="coin-icon" alt=""> <span class="cost-value">${formatNumber(cost)}</span> </div> </div> <button class="buy-button" data-upgrade-id="${upgrade.id}">Buy</button> `; if (upgrade.type === 'click') clickUpgradesDiv.appendChild(itemDiv); else if (upgrade.type === 'passive') passiveUpgradesDiv.appendChild(itemDiv); }); document.querySelectorAll('.buy-button').forEach(button => { button.removeEventListener('click', handleBuyButtonClick); button.addEventListener('click', handleBuyButtonClick); }); updateShopItemsUI(); }
        function updateShopItemsUI() { if (!userData) return; const currentCoins = userData.coins; upgrades.forEach(upgrade => { const itemDiv = document.getElementById(`shop-item-${upgrade.id}`); if (!itemDiv) return; const level = userData.upgrades?.[upgrade.id]?.level || 0; const cost = calculateUpgradeCost(upgrade, level); const nameSpan = itemDiv.querySelector('.shop-item-name'); if (nameSpan) nameSpan.textContent = `${upgrade.name} (Lv. ${level})`; const costSpan = itemDiv.querySelector('.cost-value'); if (costSpan) costSpan.textContent = formatNumber(cost); const button = itemDiv.querySelector('.buy-button'); if (button) button.disabled = currentCoins < cost; }); }
        function handleBuyButtonClick(event) { const upgradeId = event.target.dataset.upgradeId; handleUpgradePurchase(upgradeId); }
        function handleUpgradePurchase(upgradeId) { if (isLoading || !userData) return; const upgradeDef = upgrades.find(u => u.id === upgradeId); if (!upgradeDef) return; const currentLevel = userData.upgrades?.[upgradeId]?.level || 0; const cost = calculateUpgradeCost(upgradeDef, currentLevel); if (userData.coins >= cost) { userData.coins -= cost; if (!userData.upgrades[upgradeId]) userData.upgrades[upgradeId] = { level: 0 }; userData.upgrades[upgradeId].level += 1; console.log(`Purchased ${upgradeDef.name} (Lv. ${userData.upgrades[upgradeId].level}), Cost: ${formatNumber(cost)}`); updateUI(); /* Full UI refresh after purchase */ scheduleSave(); } else { console.log("Insufficient funds:", upgradeDef.name); const button = document.querySelector(`.buy-button[data-upgrade-id="${upgradeId}"]`); if (button) { button.style.animation = 'shake 0.5s'; setTimeout(() => button.style.animation = '', 500); } } }
        function calculateUpgradeCost(upgradeDef, currentLevel) { return upgradeDef.baseCost + (currentLevel * INCREASING_COST_BASE); }
        function createClickAnimation(x, y, amount) { const feedback = document.createElement('div'); feedback.className = 'click-value'; feedback.textContent = `+${formatNumber(amount)}`; feedback.style.left = `${x}px`; feedback.style.top = `${y}px`; feedback.style.transform = 'translate(-50%, -100%)'; clickFeedbackDiv.appendChild(feedback); setTimeout(() => { feedback.remove(); }, 1150); }
        function showPage(pageId) { if (isLoading) return; document.querySelectorAll('.page').forEach(page => page.classList.remove('active')); const targetPage = document.getElementById(pageId); if (!targetPage) { console.error("Target page not found:", pageId); return; } targetPage.classList.add('active'); targetPage.scrollTop = 0; /* Scroll to top on page change */ navButtons.forEach(button => { button.classList.remove('active'); if (button.id === `nav-${pageId.split('-')[0]}`) button.classList.add('active'); }); if (pageId === 'profile-screen') { updateUI(); /* Update all profile related UI */ } }
        function showShopCategory(categoryId) { shopCategories.forEach(cat => cat.classList.remove('active')); document.getElementById(categoryId).classList.add('active'); shopTabButtons.forEach(button => button.classList.remove('active')); document.getElementById(`tab-${categoryId.split('-')[0]}`).classList.add('active'); }
        function saveWallet() { if (isLoading || !userData) return; const newAddress = tonWalletInput.value.trim(); userData.tonWallet = newAddress; saveUserData(true); saveStatusP.textContent = 'Wallet address saved!'; setTimeout(() => saveStatusP.textContent = '', 3000); }
        function showError(message) { const displayMessage = typeof message === 'string' ? message : 'An unknown error occurred.'; loadingDiv.textContent = `Error:\n${displayMessage}\nPlease Reload.`; /* Added newline for better readability */ loadingDiv.style.color = 'var(--error-color)'; loadingDiv.style.display = 'flex'; console.error("App Error Displayed:", displayMessage); mainContentDiv.style.display = 'none'; navbar.style.display = 'none'; if (passiveIncomeIntervalId) clearInterval(passiveIncomeIntervalId); isLoading = false; }
        function formatNumber(num) { num = Math.floor(num); const suffixes = ["", "K", "M", "B", "T", "Qa", "Qi", "Sx", "Sp", "Oc", "No", "Dc"]; let suffixIndex = 0; if (num < 1000) return num.toString(); while (num >= 1000 && suffixIndex < suffixes.length - 1) { num /= 1000; suffixIndex++; } return num.toFixed(num < 10 ? 2 : num < 100 ? 1 : 0) + suffixes[suffixIndex]; }

        // --- Event Listeners Setup ---
        function setupEventListeners() {
             coinContainer.removeEventListener('pointerdown', handleTap); saveWalletButton.removeEventListener('click', saveWallet); copyEmojiBtn.removeEventListener('click', copyMissionEmoji); missionClaimBtn.removeEventListener('click', checkAndClaimMission); codePopupCancelBtn.removeEventListener('click', hideCodePopup); codePopupSubmitBtn.removeEventListener('click', handleCodeSubmit); codePopup.removeEventListener('click', handlePopupOverlayClick); claimLuckyCodeBtn.removeEventListener('click', handleLuckyCodeClaim);

             coinContainer.addEventListener('pointerdown', handleTap, { passive: false });
             saveWalletButton.addEventListener('click', saveWallet);
             copyEmojiBtn.addEventListener('click', copyMissionEmoji);
             missionClaimBtn.addEventListener('click', checkAndClaimMission);
             codePopupCancelBtn.addEventListener('click', hideCodePopup);
             codePopupSubmitBtn.addEventListener('click', handleCodeSubmit);
             codePopup.addEventListener('click', handlePopupOverlayClick);
             claimLuckyCodeBtn.addEventListener('click', handleLuckyCodeClaim);
             // Task listeners are added dynamically in renderTaskItem
        }
        function handlePopupOverlayClick(event) { if (event.target === codePopup) { hideCodePopup(); } }

    </script>

</body>
</html>
