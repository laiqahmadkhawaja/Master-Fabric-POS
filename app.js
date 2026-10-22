/**
 * ============================================================================
 * AL-MADINA FABRICS – WHOLESALE POS & RAW MATERIALS
 * Core Application Engine & Background Sync
 * ============================================================================
 */

/* ----------------------------------------------------------------------------
 * 1. LOCKED BUSINESS IDENTITY CONSTANTS (Unchangeable from Settings)
 * ---------------------------------------------------------------------------- */
const COMPANY_CONFIG = Object.freeze({
  nameEn: "Al-Madina Fabrics & Textile Trading",
  nameUr: "المدینہ فیبرکس اینڈ ٹیکسٹائل ٹریڈنگ",
  taglineEn: "Wholesale Fabric & Raw Material Merchants",
  taglineUr: "ہول سیل ڈیلر برائے ہر قسم کاٹن، یارن، لٹھا اور واش اینڈ ویئر",
  addressEn: "Shop # 14-16, New Cloth Market, Circular Road, Faisalabad",
  addressUr: "دکان نمبر 14-16، نیو کلوتھ مارکیٹ، سرکلر روڈ، فیصل آباد",
  phones: ["0300-9641483", "041-8765432"],
  whatsapp: "923009641483",
  ntn: "NTN: 8923412-5",
  termsEn: "Please verify Than count & meters upon transport delivery. Claims valid within 7 days.",
  termsUr: "مال ٹرانسپورٹ بلٹی سے وصول کرتے وقت تھان اور میٹر گن کر چیک کریں۔ 7 یوم کے بعد کلیم قبول نہیں ہوگا۔"
});

/* ----------------------------------------------------------------------------
 * 2. INITIAL SEED DATA
 * ---------------------------------------------------------------------------- */
function getInitialSeedData() {
  return {
    version: "1.0.0",
    lastSyncTimestamp: 0,
    items: [
      {
        id: 101,
        n: "100% Cotton Greige / Kora Latha (68x68)",
        unit: "Meters",
        lot: "LT-881",
        metersPerThan: 42.5,
        thanStock: 120,
        qtyStock: 5100,
        cost: 165,
        price: 195,
        lowThan: 20
      },
      {
        id: 102,
        n: "Fine Cotton Yarn 40/1 Count (Combed)",
        unit: "Bales",
        lot: "YN-401",
        metersPerThan: 1,
        thanStock: 45,
        qtyStock: 4500, // kg
        cost: 410,
        price: 460,
        lowThan: 10
      },
      {
        id: 103,
        n: "Polyester Filament Yarn 150D / 48F",
        unit: "Bales",
        lot: "PF-150",
        metersPerThan: 1,
        thanStock: 60,
        qtyStock: 6000, // kg
        cost: 290,
        price: 335,
        lowThan: 15
      },
      {
        id: 104,
        n: "Executive Wash & Wear White Suiting",
        unit: "Meters",
        lot: "WW-109",
        metersPerThan: 40.0,
        thanStock: 80,
        qtyStock: 3200,
        cost: 240,
        price: 290,
        lowThan: 15
      },
      {
        id: 105,
        n: "Pure Chiffon Georgette (Dyed)",
        unit: "Meters",
        lot: "CF-55",
        metersPerThan: 50.0,
        thanStock: 40,
        qtyStock: 2000,
        cost: 310,
        price: 380,
        lowThan: 10
      }
    ],
    customers: [
      { id: 1, n: "Cash Counter (Walk-in)", ph: "", city: "Faisalabad" },
      { id: 2, n: "Chaudhry Textile Garments", ph: "0301-7894561", city: "Lahore" },
      { id: 3, n: "Bismillah Dyeing & Processing", ph: "0321-4567890", city: "Gujranwala" },
      { id: 4, n: "Malik Fabrics Wholesale", ph: "0300-1122334", city: "Karachi" }
    ],
    suppliers: [
      { id: 1, n: "Kohinoor Weaving Mills Ltd", ph: "041-9201100", city: "Faisalabad" },
      { id: 2, n: "Sitara Textile Ginning & Spg", ph: "041-8547211", city: "Faisalabad" },
      { id: 3, n: "Crescent Fibers Lahore", ph: "042-3587000", city: "Lahore" }
    ],
    brokers: [
      { id: 1, n: "Haji Bashir Dalal (Textile Agent)", ph: "0300-7654321", commRate: 1.0 },
      { id: 2, n: "Tariq Mahmood Fabric Broker", ph: "0322-9988776", commRate: 1.5 }
    ],
    bills: [
      {
        id: 994, no: 994, d: "2026-10-16", t: "11:20", cid: 2, brokerId: 1, biltyNo: "LHR-4412", transport: "New Khan Goods",
        items: [{ itemId: 101, name: "100% Cotton Greige / Kora Latha (68x68)", unit: "Meters", lot: "LT-881", than: 20, qty: 850, rate: 195, cost: 165, amount: 165750 }],
        subtotal: 165750, discount: 750, tot: 165000, paid: 100000, due: 65000, profit: 24750, mode: "Bank"
      },
      {
        id: 995, no: 995, d: "2026-10-17", t: "14:15", cid: 3, brokerId: 2, biltyNo: "GUJ-9021", transport: "Gujranwala Cargo",
        items: [{ itemId: 104, name: "Executive Wash & Wear White Suiting", unit: "Meters", lot: "WW-109", than: 15, qty: 600, rate: 290, cost: 240, amount: 174000 }],
        subtotal: 174000, discount: 2000, tot: 172000, paid: 172000, due: 0, profit: 28000, mode: "Cash"
      },
      {
        id: 996, no: 996, d: "2026-10-18", t: "16:40", cid: 4, brokerId: 1, biltyNo: "KHI-1102", transport: "Tariq Goods Karachi",
        items: [{ itemId: 102, name: "Fine Cotton Yarn 40/1 Count (Combed)", unit: "Bales", lot: "YN-401", than: 8, qty: 800, rate: 460, cost: 410, amount: 368000 }],
        subtotal: 368000, discount: 3000, tot: 365000, paid: 200000, due: 165000, profit: 37000, mode: "Bank"
      },
      {
        id: 997, no: 997, d: "2026-10-19", t: "12:10", cid: 1, brokerId: 0, biltyNo: "", transport: "Local Counter Delivery",
        items: [{ itemId: 105, name: "Pure Chiffon Georgette (Dyed)", unit: "Meters", lot: "CF-55", than: 6, qty: 300, rate: 380, cost: 310, amount: 114000 }],
        subtotal: 114000, discount: 0, tot: 114000, paid: 114000, due: 0, profit: 21000, mode: "Cash"
      },
      {
        id: 998, no: 998, d: "2026-10-20", t: "15:30", cid: 2, brokerId: 1, biltyNo: "LHR-5510", transport: "New Khan Goods",
        items: [{ itemId: 101, name: "100% Cotton Greige / Kora Latha (68x68)", unit: "Meters", lot: "LT-881", than: 30, qty: 1275, rate: 195, cost: 165, amount: 248625 }],
        subtotal: 248625, discount: 1625, tot: 247000, paid: 150000, due: 97000, profit: 36625, mode: "Bank"
      },
      {
        id: 999, no: 999, d: "2026-10-21", t: "17:05", cid: 3, brokerId: 2, biltyNo: "GUJ-9130", transport: "Gujranwala Cargo",
        items: [{ itemId: 103, name: "Polyester Filament Yarn 150D / 48F", unit: "Bales", lot: "PF-150", than: 10, qty: 1000, rate: 335, cost: 290, amount: 335000 }],
        subtotal: 335000, discount: 5000, tot: 330000, paid: 250000, due: 80000, profit: 40000, mode: "Bank"
      },
      {
        id: 1000, no: 1000, d: "2026-10-22", t: "11:50", cid: 4, brokerId: 1, biltyNo: "KHI-1240", transport: "Tariq Goods Karachi",
        items: [
          { itemId: 104, name: "Executive Wash & Wear White Suiting", unit: "Meters", lot: "WW-109", than: 20, qty: 800, rate: 290, cost: 240, amount: 232000 },
          { itemId: 105, name: "Pure Chiffon Georgette (Dyed)", unit: "Meters", lot: "CF-55", than: 10, qty: 500, rate: 380, cost: 310, amount: 190000 }
        ],
        subtotal: 422000, discount: 2000, tot: 420000, paid: 300000, due: 120000, profit: 73000, mode: "Bank"
      }
    ],
    ledgers: [
      { id: 1, t: "c", p: 2, d: "2026-10-15", a: 150000, n: "Opening Balance", m: "System" },
      { id: 2, t: "s", p: 1, d: "2026-10-10", a: 320000, n: "Opening Yarn Challan", m: "System" },
      { id: 3, t: "b", p: 1, d: "2026-10-18", a: 12500, n: "Opening Commission Balance", m: "System" }
    ],
    expenses: [
      { id: 1, d: "2026-10-20", cat: "Labour / Mazdoori", a: 12000, n: "Bales unloading labor" },
      { id: 2, d: "2026-10-21", cat: "Electricity", a: 34500, n: "Warehouse bill" }
    ],
    users: [
      { id: "owner", n: "Haji Sahab (Owner)", role: "Owner", pin: "1234", perm: ["dash", "pos", "bills", "stock", "cust", "sup", "brok", "exp", "rep", "sync", "set"] },
      { id: "staff", n: "Munshi / Counter Staff", role: "Staff", pin: "0000", perm: ["pos", "bills", "cust", "stock"] }
    ],
    settings: {
      theme: "light",
      billSize: "A4",
      nextBillNo: 1001,
      cloudEndpoint: ""
    }
  };
}

/* ----------------------------------------------------------------------------
 * 3. STATE & PERSISTENCE
 * ---------------------------------------------------------------------------- */
const STORAGE_KEY = "al_madina_fabric_pos_v1";
let DB = null;
let CURRENT_USER = null;
let CURRENT_VIEW = "dash";

// POS Cart Working State
let Cart = {
  items: [],
  customerId: 1,
  brokerId: 0,
  brokerCommRate: 0,
  biltyNo: "",
  transportName: "",
  discount: 0,
  paidAmount: "",
  paymentMode: "Cash"
};

// Ledger sub-view state
let LedgerActiveTab = { c: 0, s: 0, b: 0 };

// Load Database
function loadDatabase() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      DB = JSON.parse(raw);
    }
  } catch (err) {
    console.error("Storage corrupted, re-initializing:", err);
  }
  if (!DB || !DB.items) {
    DB = getInitialSeedData();
    saveDatabase();
  } else if (!DB.bills || DB.bills.length === 0) {
    DB.bills = getInitialSeedData().bills;
    saveDatabase();
  }
}

function saveDatabase() {
  try {
    DB.lastSyncTimestamp = Date.now();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(DB));
    SyncEngine.schedulePush();
  } catch (err) {
    showToast("Storage quota warning! Consider downloading a backup.", "warning");
  }
}

/* ----------------------------------------------------------------------------
 * 4. BACKGROUND SYNC ENGINE (Offline-First to Remote JSON Endpoint)
 * ---------------------------------------------------------------------------- */
const SyncEngine = {
  syncTimeout: null,
  isSyncing: false,

  init() {
    window.addEventListener("online", () => this.updateNetworkStatus());
    window.addEventListener("offline", () => this.updateNetworkStatus());
    this.updateNetworkStatus();

    // Check every 35 seconds if endpoint is set
    setInterval(() => {
      if (navigator.onLine && DB.settings.cloudEndpoint) {
        this.pushData();
      }
    }, 35000);
  },

  updateNetworkStatus() {
    const isOnline = navigator.onLine;
    const badge = document.getElementById("network-badge");
    const text = document.getElementById("network-text");
    const syncDot = document.getElementById("sync-dot");
    const syncStatusText = document.getElementById("sync-status-text");

    if (badge && text) {
      if (isOnline) {
        badge.classList.remove("offline");
        text.textContent = "Online";
      } else {
        badge.classList.add("offline");
        text.textContent = "Offline (Local)";
      }
    }

    if (syncDot && syncStatusText) {
      if (!isOnline) {
        syncDot.className = "sync-dot offline";
        syncStatusText.textContent = "Saved Locally";
      } else if (DB && DB.settings.cloudEndpoint) {
        syncDot.className = "sync-dot";
        syncStatusText.textContent = "Cloud Sync Ready";
      } else {
        syncDot.className = "sync-dot";
        syncStatusText.textContent = "Local Only";
      }
    }
  },

  schedulePush() {
    if (!navigator.onLine || !DB.settings.cloudEndpoint) return;
    clearTimeout(this.syncTimeout);
    this.syncTimeout = setTimeout(() => this.pushData(), 1800);
  },

  async pushData() {
    if (this.isSyncing || !navigator.onLine || !DB.settings.cloudEndpoint) return;
    this.isSyncing = true;
    const syncDot = document.getElementById("sync-dot");
    if (syncDot) syncDot.className = "sync-dot pending";

    try {
      const response = await fetch(DB.settings.cloudEndpoint, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(DB)
      });
      if (response.ok) {
        showToast("Backup synced to cloud successfully", "success");
      }
    } catch (err) {
      console.warn("Auto-sync background retry scheduled:", err.message);
    } finally {
      this.isSyncing = false;
      this.updateNetworkStatus();
    }
  }
};

/* ----------------------------------------------------------------------------
 * 5. UTILITY & FORMATTING HELPERS
 * ---------------------------------------------------------------------------- */
const $ = sel => document.querySelector(sel);
const formatMoney = num => "Rs " + Math.round(num || 0).toLocaleString("en-US");
const getTodayDate = () => new Date().toISOString().slice(0, 10);
const sumArr = (arr, fn) => arr.reduce((acc, item) => acc + (fn(item) || 0), 0);

function getCustomerBalance(customerId) {
  return sumArr(DB.ledgers.filter(l => l.t === "c" && l.p === customerId), l => l.a);
}

function getSupplierBalance(supplierId) {
  return sumArr(DB.ledgers.filter(l => l.t === "s" && l.p === supplierId), l => l.a);
}

function getBrokerBalance(brokerId) {
  return sumArr(DB.ledgers.filter(l => l.t === "b" && l.p === brokerId), l => l.a);
}

function getOperatingExpensesTotal(filterDate = null) {
  let std = DB.expenses;
  let brk = DB.ledgers.filter(l => l.t === "b");
  if (filterDate) {
    std = std.filter(e => e.d === filterDate);
    brk = brk.filter(l => l.d === filterDate);
  }
  return sumArr(std, e => e.a) + sumArr(brk, l => Math.abs(l.a));
}

function showToast(message, type = "info") {
  const container = document.getElementById("toast-container");
  if (!container) return;
  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;
  toast.textContent = message;
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = "0";
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

/* ----------------------------------------------------------------------------
 * 6. NAVIGATION & PERMISSIONS
 * ---------------------------------------------------------------------------- */
const NAV_MENU = {
  dash: ["📊", "Dashboard", "ڈیش بورڈ"],
  pos:  ["🧾", "Wholesale POS", "بلنگ"],
  bills:["📄", "Invoices & Challan", "انوائسز"],
  stock:["📦", "Fabric Inventory", "سٹاک"],
  cust: ["👥", "Customer Khata", "گاہک کھاتہ"],
  sup:  ["🏭", "Mills & Suppliers", "ملز کھاتہ"],
  brok: ["🤝", "Brokers / Dalal", "دلال کمیشن"],
  exp:  ["💸", "Expenses", "اخراجات"],
  rep:  ["📈", "P&L Reports", "رپورٹس"],
  sync: ["💾", "Cloud & Backup", "بیک اپ"],
  set:  ["⚙️", "Settings", "سیٹنگز"]
};

function navigateTo(viewKey) {
  if (!CURRENT_USER.perm.includes(viewKey)) {
    showToast("Access Restricted to Administrator", "danger");
    return;
  }
  CURRENT_VIEW = viewKey;
  renderSidebar();
  renderMobileNav();
  renderCurrentView();
  // Close mobile sidebar if open
  document.getElementById("sidebar").classList.remove("open");
}

function toggleSidebar() {
  document.getElementById("sidebar").classList.toggle("open");
}

/* ----------------------------------------------------------------------------
 * 7. AUTHENTICATION MODULE & SESSION PERSISTENCE
 * ---------------------------------------------------------------------------- */
const SESSION_KEY = "al_madina_fabric_active_session";

function initAuth() {
  const userSelect = document.getElementById("login-user");
  if (userSelect && DB && DB.users) {
    userSelect.innerHTML = DB.users.map(u => `<option value="${u.id}">${u.n} (${u.role})</option>`).join("");
  }
}

function checkAutoLoginSession() {
  const savedUserId = localStorage.getItem(SESSION_KEY);
  if (savedUserId && DB && DB.users) {
    const user = DB.users.find(u => u.id === savedUserId);
    if (user) {
      CURRENT_USER = user;
      document.getElementById("login-view").style.display = "none";
      document.getElementById("app-container").style.display = "flex";

      // Setup User Badges
      const avatarEl = document.getElementById("sidebar-user-avatar");
      const nameEl = document.getElementById("sidebar-user-name");
      const roleEl = document.getElementById("sidebar-user-role");

      if (avatarEl) avatarEl.textContent = user.n[0];
      if (nameEl) nameEl.textContent = user.n;
      if (roleEl) roleEl.textContent = user.role;

      navigateTo(user.perm[0] || "pos");
      return true;
    }
  }
  return false;
}

function handleLogin() {
  const userId = document.getElementById("login-user").value;
  const pinInput = document.getElementById("login-pin").value.trim();
  const user = DB.users.find(u => u.id === userId);

  if (user && user.pin === pinInput) {
    CURRENT_USER = user;
    localStorage.setItem(SESSION_KEY, user.id);
    document.getElementById("login-view").style.display = "none";
    document.getElementById("app-container").style.display = "flex";

    // Setup User Badges
    document.getElementById("sidebar-user-avatar").textContent = user.n[0];
    document.getElementById("sidebar-user-name").textContent = user.n;
    document.getElementById("sidebar-user-role").textContent = user.role;

    navigateTo(user.perm[0] || "pos");
    showToast(`Welcome ${user.n}`, "success");
  } else {
    showToast("Invalid Security PIN", "danger");
    document.getElementById("login-pin").value = "";
    document.getElementById("login-pin").focus();
  }
}

function handleLogout() {
  localStorage.removeItem(SESSION_KEY);
  CURRENT_USER = null;
  document.getElementById("app-container").style.display = "none";
  document.getElementById("login-view").style.display = "grid";
  document.getElementById("login-pin").value = "";
  initAuth();
}

/* ----------------------------------------------------------------------------
 * 8. RENDERING ENGINE: SHELL & NAVIGATION
 * ---------------------------------------------------------------------------- */
function renderSidebar() {
  const navContainer = document.getElementById("sidebar-nav");
  navContainer.innerHTML = CURRENT_USER.perm.map(key => {
    const [icon, label] = NAV_MENU[key];
    const isActive = CURRENT_VIEW === key ? "active" : "";
    return `
      <div class="nav-item ${isActive}" onclick="navigateTo('${key}')">
        <span class="nav-icon">${icon}</span>
        <span>${label}</span>
      </div>
    `;
  }).join("");
}

function renderMobileNav() {
  const navContainer = document.getElementById("mobile-bottom-nav");
  // Pick primary 4-5 items for mobile bottom bar
  const primaryMobileKeys = ["dash", "pos", "bills", "stock", "cust"].filter(k => CURRENT_USER.perm.includes(k));
  navContainer.innerHTML = primaryMobileKeys.map(key => {
    const [icon, label] = NAV_MENU[key];
    const isActive = CURRENT_VIEW === key ? "active" : "";
    return `
      <div class="mobile-nav-item ${isActive}" onclick="navigateTo('${key}')">
        <span>${icon}</span>
        <small>${label.split(" ")[0]}</small>
      </div>
    `;
  }).join("");
}

function renderCurrentView() {
  document.getElementById("view-title").textContent = NAV_MENU[CURRENT_VIEW][1];
  const content = document.getElementById("content-area");

  switch (CURRENT_VIEW) {
    case "dash":  content.innerHTML = ViewDashboard(); break;
    case "pos":   content.innerHTML = ViewPOS(); break;
    case "bills": content.innerHTML = ViewBills(); break;
    case "stock": content.innerHTML = ViewStock(); break;
    case "cust":  content.innerHTML = ViewLedger("c", "Customer Khata", DB.customers); break;
    case "sup":   content.innerHTML = ViewLedger("s", "Weaving Mills & Suppliers", DB.suppliers); break;
    case "brok":  content.innerHTML = ViewBrokers(); break;
    case "exp":   content.innerHTML = ViewExpenses(); break;
    case "rep":   content.innerHTML = ViewReports(); break;
    case "sync":  content.innerHTML = ViewSyncBackup(); break;
    case "set":   content.innerHTML = ViewSettings(); break;
  }
}

/* ----------------------------------------------------------------------------
 * 8.5. VECTOR CHARTS & DATA VISUALIZATION ENGINE
 * ---------------------------------------------------------------------------- */
const CHART_PALETTE = ["#0d2347", "#eab308", "#16a34a", "#0284c7", "#f97316", "#dc2626", "#8b5cf6", "#14b8a6"];

function getPastDays(count = 14) {
  const result = [];
  for (let i = count - 1; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    const dateStr = d.toISOString().slice(0, 10);
    const shortLabel = d.toLocaleDateString("en-US", { day: "2-digit", month: "short" });
    result.push({ date: dateStr, label: shortLabel });
  }
  return result;
}

// 1. Sales & Net Profit Dual Trend Chart (Bars + Smooth Line)
function renderTrendChartSVG(daysCount = 14) {
  const days = getPastDays(daysCount);
  const salesData = days.map(day => sumArr(DB.bills.filter(b => b.d === day.date), b => b.tot));
  const profitData = days.map(day => sumArr(DB.bills.filter(b => b.d === day.date), b => b.profit));

  const maxVal = Math.max(...salesData, ...profitData, 1000) * 1.15;
  const W = 720;
  const H = 240;
  const padL = 60;
  const padR = 25;
  const padT = 20;
  const padB = 35;
  const innerW = W - padL - padR;
  const innerH = H - padT - padB;
  const n = days.length;
  const colW = innerW / n;
  const barW = Math.min(26, colW * 0.52);

  // Grid lines
  let gridLines = "";
  const gridSteps = 4;
  for (let s = 0; s <= gridSteps; s++) {
    const yVal = (maxVal / gridSteps) * (gridSteps - s);
    const yPos = padT + (innerH / gridSteps) * s;
    const label = yVal >= 1e5 ? (yVal / 1e5).toFixed(1) + " L" : yVal >= 1e3 ? Math.round(yVal / 1e3) + " k" : Math.round(yVal);
    gridLines += `
      <line x1="${padL}" y1="${yPos}" x2="${W - padR}" y2="${yPos}" stroke="var(--border-light)" stroke-dasharray="3,3" />
      <text x="${padL - 8}" y="${yPos + 4}" font-size="10" fill="var(--text-muted)" text-anchor="end" font-family="sans-serif">${label}</text>
    `;
  }

  // Bars & Path points
  let barsSvg = "";
  let pathPts = [];
  let pointsSvg = "";
  let xLabels = "";

  days.forEach((day, i) => {
    const xCenter = padL + (i + 0.5) * colW;
    const sVal = salesData[i];
    const pVal = profitData[i];

    // Sales Bar
    const bHeight = Math.max(0, (sVal / maxVal) * innerH);
    const bY = padT + innerH - bHeight;
    barsSvg += `
      <rect x="${xCenter - barW / 2}" y="${bY}" width="${barW}" height="${bHeight}" rx="4" fill="url(#barGrad)" class="chart-bar"
        data-tip="${day.label}: Sales ${formatMoney(sVal)} | Profit ${formatMoney(pVal)}"></rect>
    `;

    // Profit Point
    const pY = padT + innerH - (pVal / maxVal) * innerH;
    pathPts.push({ x: xCenter, y: pY });

    pointsSvg += `
      <circle cx="${xCenter}" cy="${pY}" r="4" fill="#eab308" stroke="#ffffff" stroke-width="2" class="chart-point"
        data-tip="${day.label}: Profit ${formatMoney(pVal)}"></circle>
    `;

    // Date Label
    if (n <= 8 || i % 2 === 0 || i === n - 1) {
      xLabels += `
        <text x="${xCenter}" y="${H - 10}" font-size="10" fill="var(--text-muted)" text-anchor="middle" font-family="sans-serif">${day.label}</text>
      `;
    }
  });

  // Smooth Bezier Curve Path for Profit
  let curvePath = "";
  if (pathPts.length > 0) {
    curvePath = `M ${pathPts[0].x} ${pathPts[0].y}`;
    for (let i = 0; i < pathPts.length - 1; i++) {
      const p0 = pathPts[i];
      const p1 = pathPts[i + 1];
      const mx = (p0.x + p1.x) / 2;
      curvePath += ` C ${mx} ${p0.y}, ${mx} ${p1.y}, ${p1.x} ${p1.y}`;
    }
  }

  return `
    <div class="chart-header">
      <div class="chart-legend">
        <span><span class="legend-dot" style="background:#1b498b"></span> Wholesale Sales (Rs)</span>
        <span><span class="legend-dot" style="background:#eab308"></span> Gross Margin (Rs)</span>
      </div>
      <small style="color:var(--text-muted)">Daily Trend (Interactive)</small>
    </div>
    <svg viewBox="0 0 ${W} ${H}" class="chart-svg">
      <defs>
        <linearGradient id="barGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#1b498b" stop-opacity="0.95" />
          <stop offset="100%" stop-color="#0d2347" stop-opacity="0.6" />
        </linearGradient>
      </defs>
      ${gridLines}
      ${barsSvg}
      <path d="${curvePath}" fill="none" stroke="#eab308" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" />
      ${pointsSvg}
      ${xLabels}
    </svg>
  `;
}

// 2. Fabric Variety Sales Donut Chart
function renderVarietyDonutChart() {
  const itemsBreakdown = DB.items.map((it, idx) => {
    let revenue = 0;
    DB.bills.forEach(b => {
      b.items.forEach(line => {
        if (line.itemId === it.id) revenue += line.amount;
      });
    });
    return { name: it.n, val: revenue, color: CHART_PALETTE[idx % CHART_PALETTE.length] };
  }).filter(x => x.val > 0).sort((a, b) => b.val - a.val);

  const total = sumArr(itemsBreakdown, i => i.val) || 1;
  const radius = 56;
  const circ = 2 * Math.PI * radius; // ~351.85
  let offset = 0;

  let slicesSvg = "";
  itemsBreakdown.forEach(item => {
    const pct = item.val / total;
    const strokeLen = pct * circ;
    slicesSvg += `
      <circle cx="85" cy="85" r="${radius}" fill="none" stroke="${item.color}" stroke-width="24"
        stroke-dasharray="${strokeLen} ${circ - strokeLen}" stroke-dashoffset="${-offset}"
        data-tip="${item.name}: ${formatMoney(item.val)} (${(pct * 100).toFixed(1)}%)"
        style="cursor:pointer;transition:stroke-width 0.2s" onmouseover="this.setAttribute('stroke-width','28')" onmouseout="this.setAttribute('stroke-width','24')"
        transform="rotate(-90 85 85)" />
    `;
    offset += strokeLen;
  });

  return `
    <div class="donut-wrapper">
      <div style="position:relative; width:170px; height:170px; flex-shrink:0">
        <svg viewBox="0 0 170 170" width="170" height="170">
          ${slicesSvg}
          <text x="85" y="80" text-anchor="middle" font-size="11" fill="var(--text-muted)" font-family="sans-serif">Turnover</text>
          <text x="85" y="98" text-anchor="middle" font-size="13" font-weight="800" fill="var(--text-main)" font-family="sans-serif">${formatMoney(total)}</text>
        </svg>
      </div>

      <div class="donut-legend">
        ${itemsBreakdown.map(item => `
          <div class="donut-legend-item">
            <span class="donut-item-label">
              <span class="legend-dot" style="background:${item.color}"></span>
              <span style="max-width:180px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis" title="${item.name}">${item.name}</span>
            </span>
            <span class="donut-item-val">${((item.val / total) * 100).toFixed(0)}% (${formatMoney(item.val)})</span>
          </div>
        `).join("")}
      </div>
    </div>
  `;
}

// 3. Top Wholesale Customers Progress Bars
function renderTopCustomersHBar() {
  const custStats = DB.customers.filter(c => c.id !== 1).map(c => {
    const turnover = sumArr(DB.bills.filter(b => b.cid === c.id), b => b.tot);
    return { name: c.n, city: c.city, val: turnover };
  }).sort((a, b) => b.val - a.val).slice(0, 5);

  const maxCust = Math.max(...custStats.map(c => c.val), 1);

  return custStats.map(c => {
    const pct = Math.max(3, (c.val / maxCust) * 100);
    return `
      <div class="hbar-row">
        <div class="hbar-label">
          <span><b>${c.name}</b> <small style="color:var(--text-muted)">(${c.city})</small></span>
          <b>${formatMoney(c.val)}</b>
        </div>
        <div class="hbar-track">
          <div class="hbar-fill" style="width:${pct}%; background:linear-gradient(90deg, #1b498b, #0284c7)"></div>
        </div>
      </div>
    `;
  }).join("") || `<p style="color:var(--text-muted)">No wholesale credit clients yet</p>`;
}

// 4. Warehouse Stock Level Bars
function renderStockLevelsHBar() {
  const maxThan = Math.max(...DB.items.map(i => i.thanStock), 100);
  return DB.items.map(i => {
    const isLow = i.thanStock <= (i.lowThan || 15);
    const pct = Math.min(100, Math.max(4, (i.thanStock / maxThan) * 100));
    return `
      <div class="hbar-row">
        <div class="hbar-label">
          <span><b>${i.n}</b> [${i.lot}]</span>
          <span><b>${i.thanStock} Than</b> (${i.qtyStock.toLocaleString()} ${i.unit})</span>
        </div>
        <div class="hbar-track">
          <div class="hbar-fill" style="width:${pct}%; background:${isLow ? '#dc2626' : '#16a34a'}"></div>
        </div>
      </div>
    `;
  }).join("");
}

// 5. Expense Breakdown by Category
function renderExpenseCategoryHBar() {
  const cats = {};
  DB.expenses.forEach(e => {
    cats[e.cat] = (cats[e.cat] || 0) + e.a;
  });
  DB.ledgers.filter(l => l.t === "b").forEach(l => {
    const catName = l.a < 0 ? "Broker Commission Paid" : "Broker Commission Accrued";
    cats[catName] = (cats[catName] || 0) + Math.abs(l.a);
  });
  const entries = Object.entries(cats).map(([name, val]) => ({ name, val })).sort((a, b) => b.val - a.val);
  const maxExp = Math.max(...entries.map(e => e.val), 1);

  return entries.map((cat, idx) => {
    const pct = Math.max(4, (cat.val / maxExp) * 100);
    const col = CHART_PALETTE[(idx + 3) % CHART_PALETTE.length];
    return `
      <div class="hbar-row">
        <div class="hbar-label">
          <span>${cat.name}</span>
          <b class="val-neg">${formatMoney(cat.val)}</b>
        </div>
        <div class="hbar-track">
          <div class="hbar-fill" style="width:${pct}%; background:${col}"></div>
        </div>
      </div>
    `;
  }).join("") || `<p style="color:var(--text-muted)">No expenses recorded</p>`;
}

function initChartTooltips() {
  let tip = document.getElementById("chart-tooltip");
  if (!tip) {
    tip = document.createElement("div");
    tip.id = "chart-tooltip";
    document.body.appendChild(tip);
  }

  const handleTooltip = e => {
    const target = e.target.closest && e.target.closest("[data-tip]");
    if (!target) {
      tip.style.display = "none";
      return;
    }
    tip.textContent = target.getAttribute("data-tip");
    tip.style.display = "block";
    tip.style.left = e.clientX + "px";
    tip.style.top = e.clientY + "px";
  };

  document.addEventListener("pointermove", handleTooltip);
  document.addEventListener("pointerdown", handleTooltip);
}

/* ----------------------------------------------------------------------------
 * 9. MODULE: DASHBOARD
 * ---------------------------------------------------------------------------- */
function ViewDashboard() {
  const today = getTodayDate();
  const todayBills = DB.bills.filter(b => b.d === today);
  const todaySales = sumArr(todayBills, b => b.tot);
  const todayProfit = sumArr(todayBills, b => b.profit);
  const todayExpenses = getOperatingExpensesTotal(today);
  const netProfit = todayProfit - todayExpenses;

  // Receivables & Payables
  const totalReceivable = sumArr(DB.customers, c => Math.max(0, getCustomerBalance(c.id)));
  const totalPayable = sumArr(DB.suppliers, s => Math.max(0, getSupplierBalance(s.id)));
  const totalStockThan = sumArr(DB.items, i => i.thanStock);
  const totalStockMeters = sumArr(DB.items, i => i.qtyStock);

  return `
    <div class="g g-4">
      <div class="kpi-card blue">
        <span class="kpi-label">Today's Sales</span>
        <div class="kpi-value">${formatMoney(todaySales)}</div>
        <span class="kpi-sub">${todayBills.length} Wholesale Invoices</span>
      </div>
      <div class="kpi-card green">
        <span class="kpi-label">Today's Net Profit</span>
        <div class="kpi-value ${netProfit < 0 ? 'val-neg' : 'val-pos'}">${formatMoney(netProfit)}</div>
        <span class="kpi-sub">Margin after Exp: ${formatMoney(todayExpenses)}</span>
      </div>
      <div class="kpi-card gold">
        <span class="kpi-label">Customer Receivables</span>
        <div class="kpi-value">${formatMoney(totalReceivable)}</div>
        <span class="kpi-sub">Outstanding Market Khata</span>
      </div>
      <div class="kpi-card red">
        <span class="kpi-label">Payable to Mills</span>
        <div class="kpi-value">${formatMoney(totalPayable)}</div>
        <span class="kpi-sub">Weaving Mills / Suppliers</span>
      </div>
    </div>

    <br>
    <!-- 14 DAYS SALES & PROFIT TREND CHART -->
    <div class="card">
      <div class="card-title-bar">
        <h3 class="card-title">📈 14-Day Sales &amp; Profit Trend</h3>
        <span class="badge badge-info">Interactive Dual-Chart</span>
      </div>
      ${renderTrendChartSVG(14)}
    </div>

    <br>
    <div class="g g-2">
      <!-- FABRIC TURNOVER DONUT -->
      <div class="card">
        <div class="card-title-bar">
          <h3 class="card-title">🧵 Turnover by Fabric Variety</h3>
        </div>
        ${renderVarietyDonutChart()}
      </div>

      <!-- TOP CUSTOMERS PROGRESS -->
      <div class="card">
        <div class="card-title-bar">
          <h3 class="card-title">👥 Top Wholesale Customers</h3>
        </div>
        ${renderTopCustomersHBar()}
      </div>
    </div>

    <br>
    <div class="g g-2">
      <!-- WAREHOUSE STOCK LEVEL -->
      <div class="card">
        <div class="card-title-bar">
          <h3 class="card-title">📦 Warehouse Fabric Stock (Than / Bales)</h3>
          <span class="badge badge-success">${totalStockThan.toLocaleString()} Total Than</span>
        </div>
        ${renderStockLevelsHBar()}
      </div>

      <!-- EXPENSE BREAKDOWN -->
      <div class="card">
        <div class="card-title-bar">
          <h3 class="card-title">💸 Expenses Breakdown</h3>
        </div>
        ${renderExpenseCategoryHBar()}
      </div>
    </div>
  `;
}

/* ----------------------------------------------------------------------------
 * 10. MODULE: WHOLESALE POS & BILLING (Cart, Rolls/Than & Meters, Broker)
 * ---------------------------------------------------------------------------- */
function ViewPOS() {
  const customer = DB.customers.find(c => c.id === Cart.customerId) || DB.customers[0];
  const custBalance = getCustomerBalance(customer.id);

  const subtotal = sumArr(Cart.items, it => it.amount);
  const discount = Number(Cart.discount) || 0;
  const netTotal = Math.max(0, subtotal - discount);
  const paid = Cart.paidAmount === "" ? netTotal : Number(Cart.paidAmount);
  const balanceDue = netTotal - paid;

  return `
    <div class="g g-2">
      <!-- LEFT: CART & ITEM ENTRY -->
      <div class="card">
        <div class="card-title-bar">
          <h3 class="card-title">Add Fabric / Raw Material</h3>
        </div>

        <div class="g g-3">
          <div style="grid-column: 1 / -1">
            <label style="font-size:12px;font-weight:600;color:var(--text-muted)">Select Item / Quality</label>
            <select id="pos-item-select" class="form-control" onchange="onPosItemSelectChange()">
              ${DB.items.map(i => `
                <option value="${i.id}">
                  ${i.n} [Lot: ${i.lot}] — Stock: ${i.thanStock} Than (${i.qtyStock} ${i.unit})
                </option>
              `).join("")}
            </select>
          </div>

          <div>
            <label style="font-size:12px;font-weight:600;color:var(--text-muted)">Lot / Challan #</label>
            <input type="text" id="pos-lot" class="form-control" placeholder="Lot #">
          </div>

          <div>
            <label style="font-size:12px;font-weight:600;color:var(--text-muted)">Than / Rolls / Bales</label>
            <input type="number" id="pos-than" class="form-control" placeholder="No. of Than" oninput="onPosThanInput()">
          </div>

          <div>
            <label style="font-size:12px;font-weight:600;color:var(--text-muted)">Total Meters / Kg</label>
            <input type="number" id="pos-qty" class="form-control" placeholder="Total Quantity" step="0.1">
          </div>

          <div>
            <label style="font-size:12px;font-weight:600;color:var(--text-muted)">Rate (Per Meter/Kg)</label>
            <input type="number" id="pos-rate" class="form-control" placeholder="Rate">
          </div>

          <div style="display:flex;align-items:flex-end">
            <button class="btn btn-warning btn-block" onclick="addPosItemToCart()">+ Add Item</button>
          </div>
        </div>

        <hr style="border:0;border-top:1px solid var(--border-light);margin:16px 0">

        <!-- CART TABLE -->
        <div class="table-responsive">
          <table>
            <thead>
              <tr>
                <th>Item</th>
                <th>Lot #</th>
                <th>Than</th>
                <th>Meters/Qty</th>
                <th>Rate</th>
                <th>Total</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              ${Cart.items.length === 0 ? `
                <tr><td colspan="7" style="text-align:center;color:var(--text-muted);padding:24px">Cart is empty. Select item above.</td></tr>
              ` : Cart.items.map((it, idx) => `
                <tr>
                  <td><b>${it.name}</b></td>
                  <td>${it.lot}</td>
                  <td>${it.than} Than</td>
                  <td>${it.qty} ${it.unit}</td>
                  <td>Rs ${it.rate}</td>
                  <td><b>${formatMoney(it.amount)}</b></td>
                  <td><button class="btn btn-sm btn-danger" onclick="removePosItem(${idx})">✕</button></td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      </div>

      <!-- RIGHT: INVOICE SUMMARY & DISPATCH DETAILS -->
      <div class="card">
        <div class="card-title-bar">
          <h3 class="card-title">Invoice & Dispatch Details</h3>
        </div>

        <div>
          <label style="font-size:12px;font-weight:600;color:var(--text-muted)">Customer / Billed To</label>
          <select class="form-control" onchange="Cart.customerId = Number(this.value); renderCurrentView()">
            ${DB.customers.map(c => `
              <option value="${c.id}" ${c.id === Cart.customerId ? 'selected' : ''}>
                ${c.n} (${c.city || 'Local'})
              </option>
            `).join("")}
          </select>
          <div style="font-size:12px;margin-top:4px;color:var(--text-muted)">
            Previous Khata Balance: <b class="${custBalance > 0 ? 'val-neg' : 'val-pos'}">${formatMoney(custBalance)}</b>
          </div>
        </div>

        <div class="g g-2" style="margin-top:10px">
          <div>
            <label style="font-size:12px;font-weight:600;color:var(--text-muted)">Broker / Dalal</label>
            <select class="form-control" onchange="onPosBrokerChange(this.value)">
              <option value="0">No Broker (Direct)</option>
              ${DB.brokers.map(b => `
                <option value="${b.id}" ${b.id === Cart.brokerId ? 'selected' : ''}>
                  ${b.n} (${b.commRate}%)
                </option>
              `).join("")}
            </select>
          </div>

          <div>
            <label style="font-size:12px;font-weight:600;color:var(--text-muted)">Transport / Adda Name</label>
            <input type="text" class="form-control" placeholder="e.g. Tariq Goods / New Khan" value="${Cart.transportName}" oninput="Cart.transportName = this.value">
          </div>

          <div>
            <label style="font-size:12px;font-weight:600;color:var(--text-muted)">Bilty Number #</label>
            <input type="text" class="form-control" placeholder="e.g. FSD-9982" value="${Cart.biltyNo}" oninput="Cart.biltyNo = this.value">
          </div>

          <div>
            <label style="font-size:12px;font-weight:600;color:var(--text-muted)">Payment Channel</label>
            <select class="form-control" onchange="Cart.paymentMode = this.value">
              <option value="Cash">Cash Counter</option>
              <option value="Bank">Bank Transfer</option>
              <option value="JazzCash">JazzCash / EasyPaisa</option>
              <option value="Cheque">Cheque</option>
            </select>
          </div>
        </div>

        <div style="background:var(--bg-hover);padding:14px;border-radius:var(--radius-sm);margin:14px 0">
          <div style="display:flex;justify-content:space-between;margin-bottom:6px">
            <span>Subtotal:</span>
            <b>${formatMoney(subtotal)}</b>
          </div>

          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px">
            <span>Special Discount:</span>
            <input type="number" id="cart-discount-input" class="form-control form-control-sm" style="width:110px;text-align:right" value="${Cart.discount}" oninput="onCartDiscountInput(this.value)">
          </div>

          <div style="display:flex;justify-content:space-between;font-size:18px;font-weight:800;color:var(--primary-navy);border-top:1px solid var(--border-color);padding-top:8px">
            <span>Net Bill Total:</span>
            <span id="cart-net-total-val">${formatMoney(netTotal)}</span>
          </div>

          <div style="display:flex;justify-content:space-between;align-items:center;margin-top:10px">
            <span>Paid Now (Leave blank for full):</span>
            <input type="number" id="cart-paid-input" class="form-control form-control-sm" style="width:130px;text-align:right" placeholder="${netTotal}" value="${Cart.paidAmount}" oninput="onCartPaidInput(this.value)">
          </div>

          <div style="display:flex;justify-content:space-between;margin-top:6px;font-size:13px">
            <span>Balance Added to Khata:</span>
            <b id="cart-balance-due-val" class="${balanceDue > 0 ? 'val-neg' : 'val-pos'}">${formatMoney(balanceDue)}</b>
          </div>
        </div>

        <button class="btn btn-success btn-block btn-lg" onclick="saveAndPrintWholesaleBill()">
          💾 Save &amp; Print Commercial Bill
        </button>
      </div>
    </div>
  `;
}

function updateCartFinancialSummary() {
  const subtotal = sumArr(Cart.items, it => it.amount);
  const discount = Number(Cart.discount) || 0;
  const netTotal = Math.max(0, subtotal - discount);
  const paid = Cart.paidAmount === "" ? netTotal : Number(Cart.paidAmount);
  const balanceDue = netTotal - paid;

  const netEl = document.getElementById("cart-net-total-val");
  if (netEl) netEl.textContent = formatMoney(netTotal);

  const paidInput = document.getElementById("cart-paid-input");
  if (paidInput) paidInput.placeholder = netTotal;

  const dueEl = document.getElementById("cart-balance-due-val");
  if (dueEl) {
    dueEl.textContent = formatMoney(balanceDue);
    dueEl.className = balanceDue > 0 ? "val-neg" : "val-pos";
  }
}

function onCartDiscountInput(val) {
  Cart.discount = val;
  updateCartFinancialSummary();
}

function onCartPaidInput(val) {
  Cart.paidAmount = val;
  updateCartFinancialSummary();
}

function onPosItemSelectChange() {
  const itemId = Number(document.getElementById("pos-item-select").value);
  const item = DB.items.find(i => i.id === itemId);
  if (!item) return;

  document.getElementById("pos-lot").value = item.lot || "";
  document.getElementById("pos-rate").value = item.price || 0;
  onPosThanInput();
}

function onPosThanInput() {
  const itemId = Number(document.getElementById("pos-item-select").value);
  const item = DB.items.find(i => i.id === itemId);
  if (!item) return;

  const thanCount = Number(document.getElementById("pos-than").value) || 0;
  if (thanCount > 0 && item.metersPerThan > 1) {
    document.getElementById("pos-qty").value = (thanCount * item.metersPerThan).toFixed(1);
  }
}

function onPosBrokerChange(brokerId) {
  Cart.brokerId = Number(brokerId);
  const broker = DB.brokers.find(b => b.id === Cart.brokerId);
  Cart.brokerCommRate = broker ? broker.commRate : 0;
}

function addPosItemToCart() {
  const itemId = Number(document.getElementById("pos-item-select").value);
  const item = DB.items.find(i => i.id === itemId);
  if (!item) return;

  const lot = document.getElementById("pos-lot").value.trim() || item.lot;
  const than = Number(document.getElementById("pos-than").value) || 0;
  const qty = Number(document.getElementById("pos-qty").value) || 0;
  const rate = Number(document.getElementById("pos-rate").value) || 0;

  if (qty <= 0 || rate <= 0) {
    showToast("Please enter valid quantity and rate", "warning");
    return;
  }

  Cart.items.push({
    itemId: item.id,
    name: item.n,
    unit: item.unit,
    lot,
    than,
    qty,
    rate,
    cost: item.cost,
    amount: Math.round(qty * rate)
  });

  // Clear inputs
  document.getElementById("pos-than").value = "";
  document.getElementById("pos-qty").value = "";
  renderCurrentView();
}

function removePosItem(index) {
  Cart.items.splice(index, 1);
  renderCurrentView();
}

function saveAndPrintWholesaleBill() {
  if (Cart.items.length === 0) {
    showToast("Cart is empty! Add at least one fabric item", "warning");
    return;
  }

  const subtotal = sumArr(Cart.items, it => it.amount);
  const totalCost = sumArr(Cart.items, it => it.qty * it.cost);
  const discount = Number(Cart.discount) || 0;
  const netTotal = Math.max(0, subtotal - discount);
  const paid = Cart.paidAmount === "" ? netTotal : Number(Cart.paidAmount);
  const balanceDue = netTotal - paid;
  const grossProfit = netTotal - totalCost;

  const billNo = DB.settings.nextBillNo++;
  const dateStr = getTodayDate();
  const timeStr = new Date().toLocaleTimeString("en-GB").slice(0, 5);

  // 1. Deduct Inventory
  Cart.items.forEach(cartItem => {
    const dbItem = DB.items.find(i => i.id === cartItem.itemId);
    if (dbItem) {
      dbItem.thanStock = Math.max(0, dbItem.thanStock - cartItem.than);
      dbItem.qtyStock = Math.max(0, dbItem.qtyStock - cartItem.qty);
    }
  });

  // 2. Add Customer Ledger entry if due
  if (balanceDue > 0 && Cart.customerId !== 1) {
    DB.ledgers.push({
      id: Date.now(),
      t: "c",
      p: Cart.customerId,
      d: dateStr,
      a: balanceDue,
      n: `Bill #${billNo} Balance Due`,
      m: Cart.paymentMode
    });
  }

  // 3. Broker commission ledger
  if (Cart.brokerId > 0 && Cart.brokerCommRate > 0) {
    const commAmount = Math.round((netTotal * Cart.brokerCommRate) / 100);
    DB.ledgers.push({
      id: Date.now() + 1,
      t: "b",
      p: Cart.brokerId,
      d: dateStr,
      a: commAmount,
      n: `Comm Bill #${billNo} (${Cart.brokerCommRate}%)`,
      m: "Payable"
    });
  }

  // 4. Save Bill
  const newBill = {
    id: billNo,
    no: billNo,
    d: dateStr,
    t: timeStr,
    cid: Cart.customerId,
    brokerId: Cart.brokerId,
    biltyNo: Cart.biltyNo,
    transport: Cart.transportName,
    items: [...Cart.items],
    subtotal,
    discount,
    tot: netTotal,
    paid,
    due: balanceDue,
    profit: grossProfit,
    mode: Cart.paymentMode
  };

  DB.bills.push(newBill);
  saveDatabase();

  // Reset Cart
  Cart.items = [];
  Cart.discount = 0;
  Cart.paidAmount = "";
  Cart.biltyNo = "";
  Cart.transportName = "";

  showToast(`Bill #${billNo} Saved Successfully!`, "success");
  renderCurrentView();

  // Open Document Modal
  openInvoiceModal(newBill);
}

/* ----------------------------------------------------------------------------
 * 11. MODULE: INVOICE & CHALLAN LIST
 * ---------------------------------------------------------------------------- */
function ViewBills() {
  const reversedBills = [...DB.bills].reverse();

  return `
    <div class="card">
      <div class="card-title-bar">
        <h3 class="card-title">Commercial Bills &amp; Delivery Challans (${DB.bills.length})</h3>
        <input type="text" id="bill-search-input" class="form-control form-control-sm" style="max-width:240px" placeholder="Search Bill # or Customer" oninput="filterBillsTable(this.value)">
      </div>

      <div class="table-responsive">
        <table id="bills-table">
          <thead>
            <tr>
              <th>Bill #</th>
              <th>Date</th>
              <th>Customer</th>
              <th>Bilty # / Transport</th>
              <th>Total</th>
              <th>Paid</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            ${reversedBills.length === 0 ? `
              <tr><td colspan="8" style="text-align:center;color:var(--text-muted);padding:24px">No bills recorded yet.</td></tr>
            ` : reversedBills.map(b => {
              const cust = DB.customers.find(c => c.id === b.cid) || { n: "Walk-in" };
              const isPaid = b.due <= 0;
              return `
                <tr>
                  <td><b>#${b.no}</b></td>
                  <td>${b.d} ${b.t}</td>
                  <td>${cust.n}</td>
                  <td>${b.biltyNo ? `${b.biltyNo} (${b.transport || 'Transport'})` : 'Local Handover'}</td>
                  <td><b>${formatMoney(b.tot)}</b></td>
                  <td>${formatMoney(b.paid)}</td>
                  <td>
                    <span class="badge ${isPaid ? 'badge-success' : 'badge-danger'}">
                      ${isPaid ? 'PAID' : 'CREDIT DUE'}
                    </span>
                  </td>
                  <td>
                    <button class="btn btn-outline btn-sm" onclick="openInvoiceModalById(${b.no})">View Bill</button>
                    <button class="btn btn-outline btn-sm" onclick="openChallanModalById(${b.no})">Challan</button>
                    <button class="btn btn-warning btn-sm" onclick="editWholesaleBill(${b.no})">✏️ Edit</button>
                    <button class="btn btn-danger btn-sm" onclick="deleteWholesaleBill(${b.no})">🗑️ Delete</button>
                  </td>
                </tr>
              `;
            }).join("")}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function editWholesaleBill(billNo) {
  const bill = DB.bills.find(b => b.no === billNo);
  if (!bill) return;

  const currentCust = DB.customers.find(c => c.id === bill.cid) || { n: "Cash Counter" };
  const newCustName = prompt(`Customer Account (Currently: ${currentCust.n}):\nLeave blank to keep, or enter existing customer name:`, "");
  if (newCustName !== null && newCustName.trim()) {
    const matchedCust = DB.customers.find(c => c.n.toLowerCase().trim() === newCustName.toLowerCase().trim());
    if (matchedCust) {
      bill.cid = matchedCust.id;
    } else {
      if (confirm(`Customer "${newCustName.trim()}" not found. Create new customer account?`)) {
        const newC = { id: Date.now(), n: newCustName.trim(), ph: "", city: "Local" };
        DB.customers.push(newC);
        bill.cid = newC.id;
      }
    }
  }

  const newBilty = prompt(`Update Bilty Number for Bill #${bill.no}:`, bill.biltyNo || "");
  if (newBilty === null) return;

  const newTransport = prompt(`Update Transport / Adda for Bill #${bill.no}:`, bill.transport || "");
  if (newTransport === null) return;

  const newDiscountStr = prompt(`Update Discount (Rs) (Current: Rs ${bill.dis || 0}):`, bill.dis || 0);
  if (newDiscountStr === null) return;
  const newDiscount = Number(newDiscountStr);
  if (isNaN(newDiscount) || newDiscount < 0) {
    showToast("Invalid discount amount", "danger");
    return;
  }

  // Recalculate bill total with updated discount
  bill.dis = newDiscount;
  bill.tot = Math.max(0, (bill.sub || 0) - newDiscount);
  bill.profit = Math.round(bill.tot - (bill.cogs || 0));

  const newPaidStr = prompt(`Update Paid Amount (Total is Rs ${bill.tot}):`, bill.paid);
  if (newPaidStr === null) return;

  const newPaid = Number(newPaidStr);
  if (isNaN(newPaid) || newPaid < 0) {
    showToast("Invalid paid amount", "danger");
    return;
  }

  bill.biltyNo = newBilty.trim();
  bill.transport = newTransport.trim();
  bill.paid = newPaid;
  bill.due = Math.max(0, bill.tot - newPaid);

  // Synchronize Customer Ledger (clean previous entry across accounts, then post new balance if due)
  DB.ledgers = DB.ledgers.filter(l => !(l.t === "c" && l.n.includes(`Bill #${bill.no}`)));
  if (bill.due > 0 && bill.cid !== 1) {
    DB.ledgers.push({
      id: Date.now(),
      t: "c",
      p: bill.cid,
      d: bill.d,
      a: bill.due,
      n: `Bill #${bill.no} Balance Due`,
      m: bill.mode || "Cash"
    });
  }

  // Synchronize Broker Ledger if attached
  if (bill.brokerId) {
    const broker = DB.brokers.find(b => b.id === bill.brokerId);
    if (broker && broker.commRate > 0) {
      const newComm = Math.round((bill.tot * broker.commRate) / 100);
      const brkEntry = DB.ledgers.find(l => l.t === "b" && l.p === bill.brokerId && l.n.includes(`Bill #${bill.no}`));
      if (brkEntry) {
        brkEntry.a = newComm;
        brkEntry.n = `Comm Bill #${bill.no} (${broker.commRate}%)`;
      }
    }
  }

  saveDatabase();
  showToast(`Bill #${bill.no} updated and balances synchronized!`, "success");
  renderCurrentView();
}

function deleteWholesaleBill(billNo) {
  const bill = DB.bills.find(b => b.no === billNo);
  if (!bill) return;

  if (!confirm(`Are you sure you want to delete Bill #${bill.no}?\n\nThis will:\n1. Return ${sumArr(bill.items, i => i.than)} Than back to warehouse stock.\n2. Remove outstanding balance from customer ledger.\n3. Remove broker commission records.`)) {
    return;
  }

  // 1. Restore Fabric Inventory
  bill.items.forEach(it => {
    const dbItem = DB.items.find(i => i.id === it.itemId);
    if (dbItem) {
      dbItem.thanStock += it.than || 0;
      dbItem.qtyStock += it.qty || 0;
    }
  });

  // 2. Remove Customer Ledger Due
  DB.ledgers = DB.ledgers.filter(l => !(l.t === "c" && l.n.includes(`Bill #${bill.no}`)));

  // 3. Remove Broker Commission Ledger
  DB.ledgers = DB.ledgers.filter(l => !(l.t === "b" && l.n.includes(`Bill #${bill.no}`)));

  // 4. Remove Bill
  DB.bills = DB.bills.filter(b => b.no !== billNo);

  saveDatabase();
  showToast(`Bill #${billNo} deleted, stock restored, ledgers updated`, "success");
  renderCurrentView();
}

function filterBillsTable(query) {
  const term = query.toLowerCase();
  const rows = document.querySelectorAll("#bills-table tbody tr");
  rows.forEach(r => {
    r.style.display = r.textContent.toLowerCase().includes(term) ? "" : "none";
  });
}

function openInvoiceModalById(billNo) {
  const bill = DB.bills.find(b => b.no === billNo);
  if (bill) openInvoiceModal(bill);
}

function openChallanModalById(billNo) {
  const bill = DB.bills.find(b => b.no === billNo);
  if (bill) openChallanModal(bill);
}

/* ----------------------------------------------------------------------------
 * 12. MODULE: INVENTORY & MILL STOCK RECEIVING
 * ---------------------------------------------------------------------------- */
function ViewStock() {
  const isOwner = CURRENT_USER.role === "Owner";

  return `
    <div class="card">
      <div class="card-title-bar">
        <h3 class="card-title">Add / Receive Fabric Mill Stock</h3>
      </div>
      <div class="g g-4">
        <div>
          <label style="font-size:12px;font-weight:600;color:var(--text-muted)">Fabric / Yarn Quality Name</label>
          <input type="text" id="new-item-name" class="form-control" placeholder="e.g. Cotton Latha 72x72">
        </div>

        <div>
          <label style="font-size:12px;font-weight:600;color:var(--text-muted)">Unit</label>
          <select id="new-item-unit" class="form-control">
            <option value="Meters">Meters</option>
            <option value="Bales">Bales (Yarn)</option>
            <option value="Than">Than</option>
            <option value="Kg">Kg</option>
          </select>
        </div>

        <div>
          <label style="font-size:12px;font-weight:600;color:var(--text-muted)">Lot / Challan #</label>
          <input type="text" id="new-item-lot" class="form-control" placeholder="Lot-101">
        </div>

        <div>
          <label style="font-size:12px;font-weight:600;color:var(--text-muted)">Meters Per Than/Roll</label>
          <input type="number" id="new-item-mpt" class="form-control" value="40" step="0.5">
        </div>

        <div>
          <label style="font-size:12px;font-weight:600;color:var(--text-muted)">Initial Than Count</label>
          <input type="number" id="new-item-than" class="form-control" placeholder="Than">
        </div>

        <div>
          <label style="font-size:12px;font-weight:600;color:var(--text-muted)">Purchase / Mill Cost</label>
          <input type="number" id="new-item-cost" class="form-control" placeholder="Cost">
        </div>

        <div>
          <label style="font-size:12px;font-weight:600;color:var(--text-muted)">Wholesale Selling Price</label>
          <input type="number" id="new-item-price" class="form-control" placeholder="Wholesale Rate">
        </div>

        <div style="display:flex;align-items:flex-end">
          <button class="btn btn-primary btn-block" onclick="addNewFabricStock()">+ Save Quality</button>
        </div>
      </div>
    </div>

    <br>
    <div class="card">
      <div class="card-title-bar">
        <h3 class="card-title">Warehouse Inventory List</h3>
      </div>

      <div class="table-responsive">
        <table>
          <thead>
            <tr>
              <th>Quality</th>
              <th>Lot #</th>
              <th>Stock (Than)</th>
              <th>Total Stock</th>
              ${isOwner ? '<th>Cost Rate</th>' : ''}
              <th>Wholesale Rate</th>
              <th>Stock Adjustment</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            ${DB.items.map(item => {
              const isLow = item.thanStock <= (item.lowThan || 15);
              return `
                <tr>
                  <td><b>${item.n}</b></td>
                  <td><span class="badge badge-warning">${item.lot}</span></td>
                  <td>
                    <span class="badge ${isLow ? 'badge-danger' : 'badge-success'}">
                      ${item.thanStock} Than
                    </span>
                  </td>
                  <td><b>${item.qtyStock.toLocaleString()}</b> ${item.unit}</td>
                  ${isOwner ? `<td>Rs ${item.cost}</td>` : ''}
                  <td>Rs ${item.price}</td>
                  <td>
                    <div style="display:flex;gap:4px">
                      <input type="number" id="adj-than-${item.id}" class="form-control form-control-sm" style="width:70px" placeholder="+Than">
                      <button class="btn btn-outline btn-sm" onclick="quickAddStock(${item.id})">+ Add</button>
                    </div>
                  </td>
                  <td>
                    <div style="display:flex;gap:4px">
                      <button class="btn btn-outline btn-sm" onclick="editFabricItem(${item.id})">✏️</button>
                      <button class="btn btn-danger btn-sm" onclick="deleteFabricItem(${item.id})">🗑️</button>
                    </div>
                  </td>
                </tr>
              `;
            }).join("")}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function editFabricItem(itemId) {
  const item = DB.items.find(i => i.id === itemId);
  if (!item) return;

  const newName = prompt("Edit Fabric Quality Name:", item.n);
  if (newName === null || !newName.trim()) return;

  const newLot = prompt("Edit Lot / Challan #:", item.lot);
  if (newLot === null) return;

  const newPriceStr = prompt("Edit Wholesale Selling Price (Rs):", item.price);
  if (newPriceStr === null) return;

  const newCostStr = prompt("Edit Cost / Purchase Rate (Rs):", item.cost);
  if (newCostStr === null) return;

  const newPrice = Number(newPriceStr);
  const newCost = Number(newCostStr);

  if (isNaN(newPrice) || newPrice <= 0) {
    showToast("Invalid price entered", "danger");
    return;
  }

  item.n = newName.trim();
  item.lot = newLot.trim() || item.lot;
  item.price = newPrice;
  if (!isNaN(newCost)) item.cost = newCost;

  saveDatabase();
  showToast(`Updated ${item.n}`, "success");
  renderCurrentView();
}

function deleteFabricItem(itemId) {
  const item = DB.items.find(i => i.id === itemId);
  if (!item) return;

  if (item.thanStock > 0 || item.qtyStock > 0) {
    if (!confirm(`Warning: "${item.n}" still has ${item.thanStock} Than (${item.qtyStock} ${item.unit}) in warehouse stock.\nAre you sure you want to delete this fabric quality from inventory?`)) {
      return;
    }
  } else {
    if (!confirm(`Are you sure you want to delete "${item.n}" (Lot: ${item.lot}) from warehouse inventory?`)) {
      return;
    }
  }

  DB.items = DB.items.filter(i => i.id !== itemId);
  saveDatabase();
  showToast(`Deleted ${item.n} from stock`, "success");
  renderCurrentView();
}

function addNewFabricStock() {
  const name = document.getElementById("new-item-name").value.trim();
  const unit = document.getElementById("new-item-unit").value;
  const lot = document.getElementById("new-item-lot").value.trim() || "LOT-01";
  const mpt = Number(document.getElementById("new-item-mpt").value) || 1;
  const than = Number(document.getElementById("new-item-than").value) || 0;
  const cost = Number(document.getElementById("new-item-cost").value) || 0;
  const price = Number(document.getElementById("new-item-price").value) || 0;

  if (!name || price <= 0) {
    showToast("Please enter quality name and wholesale selling rate", "warning");
    return;
  }

  DB.items.push({
    id: Date.now(),
    n: name,
    unit,
    lot,
    metersPerThan: mpt,
    thanStock: than,
    qtyStock: Math.round(than * mpt),
    cost,
    price,
    lowThan: 15
  });

  saveDatabase();
  showToast(`Added ${name} to stock`, "success");
  renderCurrentView();
}

function quickAddStock(itemId) {
  const item = DB.items.find(i => i.id === itemId);
  const input = document.getElementById(`adj-than-${itemId}`);
  const addedThan = Number(input.value) || 0;

  if (addedThan === 0) return;
  if (item.thanStock + addedThan < 0) {
    showToast(`Stock cannot be reduced below 0 (Current stock: ${item.thanStock} Than)`, "danger");
    return;
  }
  item.thanStock += addedThan;
  item.qtyStock = Math.max(0, item.qtyStock + Math.round(addedThan * (item.metersPerThan || 1)));

  saveDatabase();
  showToast(`${addedThan > 0 ? 'Added' : 'Adjusted'} ${Math.abs(addedThan)} Than ${addedThan > 0 ? 'to' : 'from'} ${item.n}`, "success");
  renderCurrentView();
}

/* ----------------------------------------------------------------------------
 * 13. MODULE: KHATA / TRIPLE LEDGER (Customer, Supplier/Mill, Broker)
 * ---------------------------------------------------------------------------- */
function ViewLedger(typeKey, title, list) {
  const activePartyId = LedgerActiveTab[typeKey] || 0;

  // Party List Overview
  if (activePartyId === 0) {
    return `
      <div class="card">
        <div class="card-title-bar">
          <h3 class="card-title">${title} Directory</h3>
          <div style="display:flex;gap:8px">
            <input type="text" id="party-new-name" class="form-control form-control-sm" placeholder="New Account Name">
            <input type="text" id="party-new-phone" class="form-control form-control-sm" placeholder="Phone #">
            <button class="btn btn-primary btn-sm" onclick="addNewParty('${typeKey}')">+ Add</button>
          </div>
        </div>

        <div class="table-responsive">
          <table>
            <thead>
              <tr>
                <th>Account Name</th>
                <th>Phone</th>
                <th>City</th>
                <th>Khata Balance</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              ${list.map(p => {
                const bal = typeKey === "c" ? getCustomerBalance(p.id) : getSupplierBalance(p.id);
                return `
                  <tr>
                    <td><b>${p.n}</b></td>
                    <td>${p.ph || '—'}</td>
                    <td>${p.city || 'Faisalabad'}</td>
                    <td>
                      <b class="${bal > 0 ? 'val-neg' : 'val-pos'}">${formatMoney(bal)}</b>
                      <small style="color:var(--text-muted)">${bal > 0 ? (typeKey === 'c' ? 'Receivable' : 'Payable') : 'Cleared'}</small>
                    </td>
                    <td>
                      <button class="btn btn-outline btn-sm" onclick="openPartyLedger('${typeKey}', ${p.id})">Open Khata</button>
                      <button class="btn btn-outline btn-sm" onclick="editPartyAccount('${typeKey}', ${p.id})">✏️</button>
                      <button class="btn btn-danger btn-sm" onclick="deletePartyAccount('${typeKey}', ${p.id})">🗑️</button>
                      ${typeKey === 'c' && p.ph ? `<button class="btn btn-success btn-sm" onclick="sendWhatsAppBalanceReminder(${p.id})">WhatsApp</button>` : ''}
                    </td>
                  </tr>
                `;
              }).join("")}
            </tbody>
          </table>
        </div>
      </div>
    `;
  }

  // Individual Ledger Sheet View
  const party = list.find(p => p.id === activePartyId) || list[0];
  const entries = DB.ledgers.filter(l => l.t === typeKey && l.p === activePartyId);
  let runningBalance = 0;

  return `
    <div class="card">
      <div class="card-title-bar">
        <div>
          <button class="btn btn-outline btn-sm" onclick="LedgerActiveTab['${typeKey}'] = 0; renderCurrentView()">← Back to Directory</button>
          <span style="font-size:18px;font-weight:700;margin-left:10px">${party.n}</span>
          <span class="badge badge-info">${party.city || 'Wholesale Client'}</span>
        </div>
        <div>
          <button class="btn btn-primary btn-sm" onclick="openLedgerPrintModal('${typeKey}', ${party.id})">🖨 Print Khata</button>
        </div>
      </div>

      <!-- Add Ledger Entry -->
      <div class="g g-4" style="background:var(--bg-hover);padding:14px;border-radius:var(--radius-sm);margin:12px 0">
        <div>
          <label style="font-size:11px;font-weight:600;color:var(--text-muted)">Amount (Rs)</label>
          <input type="number" id="ledger-add-amount" class="form-control" placeholder="Amount">
        </div>
        <div>
          <label style="font-size:11px;font-weight:600;color:var(--text-muted)">Payment Channel</label>
          <select id="ledger-add-channel" class="form-control">
            <option>Cash</option>
            <option>Bank Transfer</option>
            <option>JazzCash / EasyPaisa</option>
            <option>Cheque</option>
          </select>
        </div>
        <div>
          <label style="font-size:11px;font-weight:600;color:var(--text-muted)">Note / Description</label>
          <input type="text" id="ledger-add-note" class="form-control" placeholder="Challan / Bill / Receipt note">
        </div>
        <div style="display:flex;gap:6px;align-items:flex-end">
          <button class="btn btn-danger btn-block" onclick="addLedgerTransaction('${typeKey}', ${party.id}, 1)">+ Debit (Due)</button>
          <button class="btn btn-success btn-block" onclick="addLedgerTransaction('${typeKey}', ${party.id}, -1)">− Credit (Received)</button>
        </div>
      </div>

      <div class="table-responsive">
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Description / Note</th>
              <th>Channel</th>
              <th>Debit (Dr)</th>
              <th>Credit (Cr)</th>
              <th>Running Balance</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            ${entries.length === 0 ? `
              <tr><td colspan="7" style="text-align:center;color:var(--text-muted);padding:24px">No ledger transactions recorded yet.</td></tr>
            ` : entries.map(e => {
              runningBalance += e.a;
              return `
                <tr>
                  <td>${e.d}</td>
                  <td>${e.n || 'Transaction Entry'}</td>
                  <td><span class="badge badge-info">${e.m || 'Cash'}</span></td>
                  <td class="val-neg">${e.a > 0 ? formatMoney(e.a) : ''}</td>
                  <td class="val-pos">${e.a < 0 ? formatMoney(-e.a) : ''}</td>
                  <td><b>${formatMoney(runningBalance)}</b></td>
                  <td>
                    <div style="display:flex;gap:4px">
                      <button class="btn btn-outline btn-sm" onclick="editLedgerEntry(${e.id})">✏️</button>
                      <button class="btn btn-danger btn-sm" onclick="deleteLedgerEntry(${e.id})">🗑️</button>
                    </div>
                  </td>
                </tr>
              `;
            }).join("")}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function editLedgerEntry(entryId) {
  const entry = DB.ledgers.find(l => l.id === entryId);
  if (!entry) return;

  const currentAmt = Math.abs(entry.a);
  const isDebit = entry.a > 0;

  const newNote = prompt("Edit Description / Note:", entry.n || "");
  if (newNote === null) return;

  const typeChoice = prompt(
    `Transaction Type:\nEnter 'D' for Debit (+ Due / Receivable / Comm Accrued)\nEnter 'C' for Credit (- Payment Received / Comm Paid):`,
    isDebit ? "D" : "C"
  );
  if (typeChoice === null) return;
  const isNowDebit = typeChoice.trim().toUpperCase() === "D";

  const newAmtStr = prompt(`Edit Amount (${isNowDebit ? 'Debit (+ Due)' : 'Credit (− Paid)'}):`, currentAmt);
  if (newAmtStr === null) return;

  const newAmt = Number(newAmtStr);
  if (isNaN(newAmt) || newAmt <= 0) {
    showToast("Invalid amount entered", "danger");
    return;
  }

  const newChannel = prompt("Edit Payment Channel (Cash, Bank, JazzCash, Cheque):", entry.m || "Cash");
  if (newChannel === null) return;

  entry.n = newNote.trim();
  entry.a = isNowDebit ? newAmt : -newAmt;
  entry.m = newChannel.trim() || entry.m;

  saveDatabase();
  showToast("Ledger entry updated successfully!", "success");
  renderCurrentView();
}

function deleteLedgerEntry(entryId) {
  const entry = DB.ledgers.find(l => l.id === entryId);
  if (!entry) return;

  if (!confirm(`Delete ledger entry "${entry.n}" (${formatMoney(Math.abs(entry.a))})?`)) {
    return;
  }

  DB.ledgers = DB.ledgers.filter(l => l.id !== entryId);
  saveDatabase();
  showToast("Ledger entry deleted", "success");
  renderCurrentView();
}

function editPartyAccount(typeKey, partyId) {
  const target = typeKey === "c" ? DB.customers : typeKey === "s" ? DB.suppliers : DB.brokers;
  const party = target.find(p => p.id === partyId);
  if (!party) return;

  const newName = prompt("Edit Account Name:", party.n);
  if (newName === null || !newName.trim()) return;

  const newPhone = prompt("Edit Phone #:", party.ph || "");
  if (newPhone === null) return;

  const newCity = prompt("Edit City / Market:", party.city || "");
  if (newCity === null) return;

  party.n = newName.trim();
  party.ph = newPhone.trim();
  party.city = newCity.trim() || "Local";

  if (typeKey === "b") {
    const newRateStr = prompt("Edit Commission Rate %:", party.commRate || 0);
    if (newRateStr !== null && !isNaN(Number(newRateStr))) {
      party.commRate = Number(newRateStr);
    }
  }

  saveDatabase();
  showToast(`Updated account ${party.n}`, "success");
  renderCurrentView();
}

function deletePartyAccount(typeKey, partyId) {
  if (partyId === 1 && typeKey === "c") {
    showToast("Default cash counter account cannot be deleted", "warning");
    return;
  }

  const target = typeKey === "c" ? DB.customers : typeKey === "s" ? DB.suppliers : DB.brokers;
  const party = target.find(p => p.id === partyId);
  if (!party) return;

  const hasEntries = DB.ledgers.some(l => l.t === typeKey && l.p === partyId);
  if (hasEntries) {
    if (!confirm(`Account "${party.n}" has existing transaction history. Are you sure you want to delete this account and all its transaction records?`)) {
      return;
    }
    DB.ledgers = DB.ledgers.filter(l => !(l.t === typeKey && l.p === partyId));
  } else {
    if (!confirm(`Delete account "${party.n}"?`)) return;
  }

  if (typeKey === "c") {
    DB.customers = DB.customers.filter(c => c.id !== partyId);
  } else if (typeKey === "s") {
    DB.suppliers = DB.suppliers.filter(s => s.id !== partyId);
  } else if (typeKey === "b") {
    DB.brokers = DB.brokers.filter(b => b.id !== partyId);
  }

  if (LedgerActiveTab[typeKey] === partyId) LedgerActiveTab[typeKey] = 0;

  saveDatabase();
  showToast(`Deleted ${party.n}`, "success");
  renderCurrentView();
}

function openPartyLedger(typeKey, partyId) {
  LedgerActiveTab[typeKey] = partyId;
  renderCurrentView();
}

function addNewParty(typeKey) {
  const name = document.getElementById("party-new-name").value.trim();
  const phone = document.getElementById("party-new-phone").value.trim();
  if (!name) return;

  const target = typeKey === "c" ? DB.customers : DB.suppliers;
  target.push({
    id: Date.now(),
    n: name,
    ph: phone,
    city: "Local"
  });

  saveDatabase();
  showToast(`Added ${name} to directory`, "success");
  renderCurrentView();
}

function addLedgerTransaction(typeKey, partyId, multiplier) {
  const amt = Number(document.getElementById("ledger-add-amount").value);
  const note = document.getElementById("ledger-add-note").value.trim();
  const channel = document.getElementById("ledger-add-channel").value;

  if (amt <= 0) {
    showToast("Please enter a valid amount", "warning");
    return;
  }

  DB.ledgers.push({
    id: Date.now(),
    t: typeKey,
    p: partyId,
    d: getTodayDate(),
    a: amt * multiplier,
    n: note || (multiplier > 0 ? "Debit Entry" : "Payment Credit"),
    m: channel
  });

  saveDatabase();
  showToast("Ledger entry posted", "success");
  renderCurrentView();
}

function sendWhatsAppBalanceReminder(customerId) {
  const customer = DB.customers.find(c => c.id === customerId);
  if (!customer || !customer.ph) {
    showToast("Customer has no phone number", "warning");
    return;
  }

  const balance = getCustomerBalance(customerId);
  const cleanPhone = customer.ph.replace(/\D/g, "");
  const formattedPhone = cleanPhone.startsWith("0") ? "92" + cleanPhone.slice(1) : cleanPhone;

  const text = encodeURIComponent(
    `السلام علیکم ${customer.n} صاحب!\n\n` +
    `المدینہ فیبرکس اینڈ ٹیکسٹائل ٹریڈنگ فیصل آباد کی طرف سے آپ کے کھاتے کا بقایا بیلنس ${formatMoney(balance)} ہے۔\n` +
    `براہ کرم حساب چیک فرما کر جلد ادائیگی فرمائیں۔ شکریہ!\n` +
    `رابطہ: ${COMPANY_CONFIG.phones[0]}`
  );

  window.open(`https://wa.me/${formattedPhone}?text=${text}`, "_blank");
}

/* ----------------------------------------------------------------------------
 * 14. MODULE: BROKERS / DALAL COMMISSION & KHATA TRANSACTIONS
 * ---------------------------------------------------------------------------- */
function ViewBrokers() {
  const activeBrokerId = LedgerActiveTab.b || 0;

  // 1. Broker Directory Overview
  if (activeBrokerId === 0) {
    const totalCommPayable = sumArr(DB.brokers, b => Math.max(0, getBrokerBalance(b.id)));

    return `
      <div class="card">
        <div class="card-title-bar">
          <div>
            <h3 class="card-title">Brokers &amp; Commission Agents (دلال کھاتہ)</h3>
            <small style="color:var(--text-muted)">Total Broker Commission Payable: <b class="val-neg">${formatMoney(totalCommPayable)}</b></small>
          </div>
          <div style="display:flex;gap:8px">
            <input type="text" id="broker-new-name" class="form-control form-control-sm" placeholder="Broker Name">
            <input type="text" id="broker-new-phone" class="form-control form-control-sm" placeholder="Phone #">
            <input type="number" id="broker-new-rate" class="form-control form-control-sm" placeholder="Comm %" style="width:85px" value="1.0">
            <button class="btn btn-primary btn-sm" onclick="addNewBroker()">+ Add Broker</button>
          </div>
        </div>

        <div class="table-responsive">
          <table>
            <thead>
              <tr>
                <th>Broker / Dalal</th>
                <th>Phone</th>
                <th>Standard Rate</th>
                <th>Payable Commission</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              ${DB.brokers.map(b => {
                const bal = getBrokerBalance(b.id);
                return `
                  <tr>
                    <td><b>${b.n}</b></td>
                    <td>${b.ph || '—'}</td>
                    <td><span class="badge badge-warning">${b.commRate}%</span></td>
                    <td><b class="${bal > 0 ? 'val-neg' : 'val-pos'}">${formatMoney(bal)}</b></td>
                    <td>
                      <div style="display:flex;gap:4px">
                        <button class="btn btn-outline btn-sm" onclick="openBrokerLedger(${b.id})">Open Khata</button>
                        <button class="btn btn-warning btn-sm" onclick="payBrokerCommission(${b.id})">Pay Comm</button>
                        <button class="btn btn-outline btn-sm" onclick="editBrokerAccount(${b.id})">✏️</button>
                        <button class="btn btn-danger btn-sm" onclick="deleteBrokerAccount(${b.id})">🗑️ Delete</button>
                      </div>
                    </td>
                  </tr>
                `;
              }).join("")}
            </tbody>
          </table>
        </div>
      </div>
    `;
  }

  // 2. Individual Broker Ledger Sheet
  const broker = DB.brokers.find(b => b.id === activeBrokerId) || DB.brokers[0];
  const entries = DB.ledgers.filter(l => l.t === "b" && l.p === activeBrokerId);
  let runningBalance = 0;

  return `
    <div class="card">
      <div class="card-title-bar">
        <div>
          <button class="btn btn-outline btn-sm" onclick="LedgerActiveTab.b = 0; renderCurrentView()">← Back to Broker Directory</button>
          <span style="font-size:18px;font-weight:700;margin-left:10px">${broker.n}</span>
          <span class="badge badge-warning">${broker.commRate}% Commission Agent</span>
        </div>
        <div>
          <button class="btn btn-primary btn-sm" onclick="openLedgerPrintModal('b', ${broker.id})">🖨 Print Commission Statement</button>
        </div>
      </div>

      <!-- Add Broker Commission Transaction -->
      <div class="g g-4" style="background:var(--bg-hover);padding:14px;border-radius:var(--radius-sm);margin:12px 0">
        <div>
          <label style="font-size:11px;font-weight:600;color:var(--text-muted)">Amount (Rs)</label>
          <input type="number" id="broker-txn-amount" class="form-control" placeholder="Commission Amount">
        </div>
        <div>
          <label style="font-size:11px;font-weight:600;color:var(--text-muted)">Payment Channel</label>
          <select id="broker-txn-channel" class="form-control">
            <option>Cash</option>
            <option>Bank Transfer</option>
            <option>JazzCash / EasyPaisa</option>
            <option>Cheque</option>
          </select>
        </div>
        <div>
          <label style="font-size:11px;font-weight:600;color:var(--text-muted)">Note / Description</label>
          <input type="text" id="broker-txn-note" class="form-control" placeholder="e.g. Cash Commission Payout / Challan note">
        </div>
        <div style="display:flex;gap:6px;align-items:flex-end">
          <button class="btn btn-danger btn-block" onclick="addBrokerCommissionTxn(${broker.id}, 1)">+ Comm Due</button>
          <button class="btn btn-success btn-block" onclick="addBrokerCommissionTxn(${broker.id}, -1)">− Pay Comm</button>
        </div>
      </div>

      <div class="table-responsive">
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Description / Bill Note</th>
              <th>Channel</th>
              <th>Earned (+Due)</th>
              <th>Paid (-Cleared)</th>
              <th>Payable Balance</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            ${entries.length === 0 ? `
              <tr><td colspan="7" style="text-align:center;color:var(--text-muted);padding:24px">No commission transactions recorded yet.</td></tr>
            ` : entries.map(e => {
              runningBalance += e.a;
              return `
                <tr>
                  <td>${e.d}</td>
                  <td><b>${e.n || 'Commission Entry'}</b></td>
                  <td><span class="badge badge-info">${e.m || 'Cash'}</span></td>
                  <td class="val-neg">${e.a > 0 ? formatMoney(e.a) : ''}</td>
                  <td class="val-pos">${e.a < 0 ? formatMoney(-e.a) : ''}</td>
                  <td><b>${formatMoney(runningBalance)}</b></td>
                  <td>
                    <div style="display:flex;gap:4px">
                      <button class="btn btn-outline btn-sm" onclick="editLedgerEntry(${e.id})">✏️</button>
                      <button class="btn btn-danger btn-sm" onclick="deleteLedgerEntry(${e.id})">🗑️ Delete</button>
                    </div>
                  </td>
                </tr>
              `;
            }).join("")}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function openBrokerLedger(brokerId) {
  LedgerActiveTab.b = brokerId;
  renderCurrentView();
}

function addBrokerCommissionTxn(brokerId, multiplier) {
  const amt = Number(document.getElementById("broker-txn-amount").value);
  const note = document.getElementById("broker-txn-note").value.trim();
  const channel = document.getElementById("broker-txn-channel").value;

  if (amt <= 0) {
    showToast("Please enter a valid amount", "warning");
    return;
  }

  DB.ledgers.push({
    id: Date.now(),
    t: "b",
    p: brokerId,
    d: getTodayDate(),
    a: amt * multiplier,
    n: note || (multiplier > 0 ? "Commission Earned Entry" : "Commission Payout Cleared"),
    m: channel
  });

  saveDatabase();
  showToast(multiplier > 0 ? "Commission due entry added" : "Commission payout recorded", "success");
  renderCurrentView();
}

function addNewBroker() {
  const name = document.getElementById("broker-new-name").value.trim();
  const phone = (document.getElementById("broker-new-phone")?.value || "").trim();
  const rate = Number(document.getElementById("broker-new-rate").value) || 1.0;
  if (!name) return;

  DB.brokers.push({
    id: Date.now(),
    n: name,
    ph: phone,
    commRate: rate
  });

  saveDatabase();
  showToast(`Added broker ${name}`, "success");
  renderCurrentView();
}

function editBrokerAccount(brokerId) {
  const broker = DB.brokers.find(b => b.id === brokerId);
  if (!broker) return;

  const newName = prompt("Edit Broker / Dalal Name:", broker.n);
  if (newName === null || !newName.trim()) return;

  const newPhone = prompt("Edit Phone #:", broker.ph || "");
  if (newPhone === null) return;

  const newRateStr = prompt("Edit Commission Rate %:", broker.commRate);
  if (newRateStr === null) return;

  const newRate = Number(newRateStr);
  if (isNaN(newRate) || newRate < 0) {
    showToast("Invalid commission rate", "danger");
    return;
  }

  broker.n = newName.trim();
  broker.ph = newPhone.trim();
  broker.commRate = newRate;

  saveDatabase();
  showToast(`Updated broker ${broker.n}`, "success");
  renderCurrentView();
}

function deleteBrokerAccount(brokerId) {
  const broker = DB.brokers.find(b => b.id === brokerId);
  if (!broker) return;

  const hasEntries = DB.ledgers.some(l => l.t === "b" && l.p === brokerId);
  if (hasEntries) {
    if (!confirm(`Broker "${broker.n}" has commission transaction history. Are you sure you want to delete this broker and all their commission records?`)) {
      return;
    }
    DB.ledgers = DB.ledgers.filter(l => !(l.t === "b" && l.p === brokerId));
  } else {
    if (!confirm(`Delete broker "${broker.n}"?`)) return;
  }

  DB.brokers = DB.brokers.filter(b => b.id !== brokerId);
  if (LedgerActiveTab.b === brokerId) LedgerActiveTab.b = 0;

  saveDatabase();
  showToast(`Deleted broker ${broker.n}`, "success");
  renderCurrentView();
}

function payBrokerCommission(brokerId) {
  const broker = DB.brokers.find(b => b.id === brokerId);
  if (!broker) return;
  const currentBal = getBrokerBalance(brokerId);
  const defaultAmt = currentBal > 0 ? currentBal : "";

  const payAmt = prompt(`Enter commission payout amount for ${broker.n} (Current Balance: ${formatMoney(currentBal)}):`, defaultAmt);
  if (!payAmt || isNaN(payAmt) || Number(payAmt) <= 0) return;

  const channel = prompt("Payment Channel (Cash, Bank Transfer, JazzCash, Cheque):", "Cash") || "Cash";
  const note = prompt("Description / Note:", `Commission Payout to ${broker.n}`) || `Commission Payout to ${broker.n}`;

  DB.ledgers.push({
    id: Date.now(),
    t: "b",
    p: brokerId,
    d: getTodayDate(),
    a: -Number(payAmt),
    n: note,
    m: channel
  });

  saveDatabase();
  showToast(`Recorded ${formatMoney(Number(payAmt))} commission payout to ${broker.n} (Synced to Expenses)`, "success");
  renderCurrentView();
}

function addBrokerCommissionTxn(brokerId, multiplier) {
  const amt = Number(document.getElementById("broker-txn-amount").value);
  const note = document.getElementById("broker-txn-note").value.trim();
  const channel = document.getElementById("broker-txn-channel").value;

  if (amt <= 0) {
    showToast("Please enter a valid amount", "warning");
    return;
  }

  const broker = DB.brokers.find(b => b.id === brokerId) || { n: "Dalal" };
  const desc = note || (multiplier < 0 ? `Commission Payout to ${broker.n}` : `Commission Accrued for ${broker.n}`);

  DB.ledgers.push({
    id: Date.now(),
    t: "b",
    p: brokerId,
    d: getTodayDate(),
    a: amt * multiplier,
    n: desc,
    m: channel
  });

  saveDatabase();
  showToast(multiplier < 0 ? `Recorded ${formatMoney(amt)} commission payout (Synced to Expenses)` : `Recorded ${formatMoney(amt)} commission due`, "success");
  renderCurrentView();
}

/* ----------------------------------------------------------------------------
 * 15. MODULE: EXPENSES
 * ---------------------------------------------------------------------------- */
function ViewExpenses() {
  // 1. Standard recorded expenses
  const standardExpenses = DB.expenses.map(e => ({
    id: e.id,
    date: e.d,
    cat: e.cat,
    amount: e.a,
    note: e.n,
    source: "exp"
  }));

  // 2. Broker Commission Expenses (From Dalal Khata & Pay Comm entries & Wholesale Bills)
  const brokerExpenses = DB.ledgers.filter(l => l.t === "b").map(l => {
    const broker = DB.brokers.find(b => b.id === l.p) || { n: "Dalal" };
    const isPayout = l.a < 0;
    return {
      id: l.id,
      date: l.d,
      cat: isPayout ? "Broker Commission Paid" : "Broker Commission Accrued",
      amount: Math.abs(l.a),
      note: `${broker.n} • ${l.n} (${l.m || 'Cash'})`,
      source: "broker",
      partyId: l.p,
      isPayout
    };
  });

  const allExpenses = [...standardExpenses, ...brokerExpenses].sort((a, b) => b.date.localeCompare(a.date));
  const totalStandard = sumArr(standardExpenses, e => e.amount);
  const totalBroker = sumArr(brokerExpenses, e => e.amount);
  const grandTotalExpenses = totalStandard + totalBroker;

  return `
    <!-- Top Expense Overview KPI Cards -->
    <div class="g g-3">
      <div class="kpi-card blue">
        <span class="kpi-label">General Overheads</span>
        <div class="kpi-value">${formatMoney(totalStandard)}</div>
        <span class="kpi-sub">Rent, Labour, Electricity, Misc</span>
      </div>

      <div class="kpi-card gold">
        <span class="kpi-label">Broker / Dalal Commission</span>
        <div class="kpi-value">${formatMoney(totalBroker)}</div>
        <span class="kpi-sub">${brokerExpenses.length} Broker Commission &amp; Payout Records</span>
      </div>

      <div class="kpi-card red">
        <span class="kpi-label">Total Operating Expenses</span>
        <div class="kpi-value val-neg">${formatMoney(grandTotalExpenses)}</div>
        <span class="kpi-sub">${allExpenses.length} Total Expense Records</span>
      </div>
    </div>

    <br>
    <div class="card">
      <div class="card-title-bar">
        <h3 class="card-title">Record Business Expense (نیا خرچہ شامل کریں)</h3>
      </div>

      <div class="g g-4">
        <div>
          <label style="font-size:12px;font-weight:600;color:var(--text-muted)">Category</label>
          <select id="exp-cat" class="form-control">
            <option>Labour / Mazdoori</option>
            <option>Transport &amp; Freight</option>
            <option>Electricity &amp; Utility</option>
            <option>Shop &amp; Warehouse Rent</option>
            <option>Broker / Dalal Commission</option>
            <option>Tea, Refreshment &amp; Misc</option>
          </select>
        </div>

        <div>
          <label style="font-size:12px;font-weight:600;color:var(--text-muted)">Amount (Rs)</label>
          <input type="number" id="exp-amount" class="form-control" placeholder="Amount">
        </div>

        <div>
          <label style="font-size:12px;font-weight:600;color:var(--text-muted)">Description / Note</label>
          <input type="text" id="exp-note" class="form-control" placeholder="Details of expense">
        </div>

        <div style="display:flex;align-items:flex-end">
          <button class="btn btn-primary btn-block" onclick="addExpenseEntry()">+ Add Expense</button>
        </div>
      </div>

      <br>
      <div class="table-responsive">
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Category</th>
              <th>Description / Note</th>
              <th>Amount</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            ${allExpenses.length === 0 ? `
              <tr><td colspan="5" style="text-align:center;color:var(--text-muted);padding:24px">No expense records found.</td></tr>
            ` : allExpenses.map(e => {
              const isBroker = e.source === "broker";
              return `
                <tr>
                  <td>${e.date}</td>
                  <td>
                    <span class="badge ${isBroker ? 'badge-warning' : 'badge-info'}">
                      ${e.cat}
                    </span>
                  </td>
                  <td>${e.note || '—'}</td>
                  <td><b class="val-neg">${formatMoney(e.amount)}</b></td>
                  <td>
                    <div style="display:flex;gap:4px">
                      <button class="btn btn-outline btn-sm" onclick="${isBroker ? `editLedgerEntry(${e.id})` : `editExpenseEntry(${e.id})`}">✏️ Edit</button>
                      <button class="btn btn-danger btn-sm" onclick="${isBroker ? `deleteLedgerEntry(${e.id})` : `deleteExpenseEntry(${e.id})`}">🗑️ Delete</button>
                    </div>
                  </td>
                </tr>
              `;
            }).join("")}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function addExpenseEntry() {
  const cat = document.getElementById("exp-cat").value;
  const amt = Number(document.getElementById("exp-amount").value);
  const note = document.getElementById("exp-note").value.trim();

  if (amt <= 0) {
    showToast("Please enter a valid expense amount", "warning");
    return;
  }

  DB.expenses.push({
    id: Date.now(),
    d: getTodayDate(),
    cat,
    a: amt,
    n: note
  });

  saveDatabase();
  showToast("Expense recorded successfully!", "success");
  renderCurrentView();
}

function editExpenseEntry(expenseId) {
  const exp = DB.expenses.find(e => e.id === expenseId);
  if (!exp) return;

  const newCat = prompt("Edit Expense Category (Labour, Transport, Electricity, Rent, Broker, Misc):", exp.cat);
  if (newCat === null) return;

  const newAmtStr = prompt("Edit Expense Amount (Rs):", exp.a);
  if (newAmtStr === null) return;

  const newAmt = Number(newAmtStr);
  if (isNaN(newAmt) || newAmt <= 0) {
    showToast("Invalid expense amount", "danger");
    return;
  }

  const newNote = prompt("Edit Description / Note:", exp.n || "");
  if (newNote === null) return;

  exp.cat = newCat.trim() || exp.cat;
  exp.a = newAmt;
  exp.n = newNote.trim();

  saveDatabase();
  showToast("Expense updated successfully!", "success");
  renderCurrentView();
}

function deleteExpenseEntry(expenseId) {
  const exp = DB.expenses.find(e => e.id === expenseId);
  if (!exp) return;

  if (!confirm(`Are you sure you want to delete this expense (${exp.cat}: ${formatMoney(exp.a)})?`)) {
    return;
  }

  DB.expenses = DB.expenses.filter(e => e.id !== expenseId);
  saveDatabase();
  showToast("Expense deleted successfully!", "success");
  renderCurrentView();
}

/* ----------------------------------------------------------------------------
 * 16. MODULE: FINANCIAL & P&L REPORTS
 * ---------------------------------------------------------------------------- */
function ViewReports() {
  const today = getTodayDate();
  const allSales = sumArr(DB.bills, b => b.tot);
  const allGrossProfit = sumArr(DB.bills, b => b.profit);
  const allExpenses = getOperatingExpensesTotal();
  const allNetProfit = allGrossProfit - allExpenses;
  const totalExpenseRecords = DB.expenses.length + DB.ledgers.filter(l => l.t === "b").length;

  return `
    <div class="g g-4">
      <div class="kpi-card blue">
        <span class="kpi-label">Total Wholesale Turnover</span>
        <div class="kpi-value">${formatMoney(allSales)}</div>
        <span class="kpi-sub">${DB.bills.length} Invoices</span>
      </div>

      <div class="kpi-card gold">
        <span class="kpi-label">Gross Margin</span>
        <div class="kpi-value">${formatMoney(allGrossProfit)}</div>
        <span class="kpi-sub">Before overheads</span>
      </div>

      <div class="kpi-card red">
        <span class="kpi-label">Total Business Expenses</span>
        <div class="kpi-value">${formatMoney(allExpenses)}</div>
        <span class="kpi-sub">${totalExpenseRecords} Overheads &amp; Broker Records</span>
      </div>

      <div class="kpi-card green">
        <span class="kpi-label">Net Net Profit</span>
        <div class="kpi-value ${allNetProfit < 0 ? 'val-neg' : 'val-pos'}">${formatMoney(allNetProfit)}</div>
        <span class="kpi-sub">Pure business net gain</span>
      </div>
    </div>

    <br>
    <div class="card">
      <div class="card-title-bar">
        <h3 class="card-title">📈 30-Day Wholesale Turnover &amp; Profit Trend</h3>
        <span class="badge badge-info">Monthly BI Audit</span>
      </div>
      ${renderTrendChartSVG(30)}
    </div>

    <br>
    <div class="g g-2">
      <div class="card">
        <div class="card-title-bar">
          <h3 class="card-title">🧵 Revenue Share by Fabric Quality</h3>
        </div>
        ${renderVarietyDonutChart()}
      </div>

      <div class="card">
        <div class="card-title-bar">
          <h3 class="card-title">💸 Overhead Expenses Breakdown</h3>
        </div>
        ${renderExpenseCategoryHBar()}
      </div>
    </div>

    <br>
    <div class="card">
      <div class="card-title-bar">
        <h3 class="card-title">Fabric Sales by Variety</h3>
        <button class="btn btn-outline btn-sm" onclick="exportReportsToExcel()">⬇ Export Excel Sheet</button>
      </div>

      <div class="table-responsive">
        <table>
          <thead>
            <tr>
              <th>Quality / Item</th>
              <th>Meters/Qty Sold</th>
              <th>Wholesale Turnover</th>
            </tr>
          </thead>
          <tbody>
            ${DB.items.map(item => {
              let qtySold = 0;
              let revenue = 0;
              DB.bills.forEach(b => {
                b.items.forEach(it => {
                  if (it.itemId === item.id) {
                    qtySold += it.qty;
                    revenue += it.amount;
                  }
                });
              });
              return `
                <tr>
                  <td><b>${item.n}</b></td>
                  <td>${qtySold.toLocaleString()} ${item.unit}</td>
                  <td><b>${formatMoney(revenue)}</b></td>
                </tr>
              `;
            }).join("")}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function exportReportsToExcel() {
  let tableHtml = `<table border="1"><tr><th>Bill #</th><th>Date</th><th>Customer</th><th>Total</th><th>Paid</th><th>Due</th></tr>`;
  DB.bills.forEach(b => {
    const cust = DB.customers.find(c => c.id === b.cid) || { n: "Walk-in" };
    tableHtml += `<tr><td>${b.no}</td><td>${b.d}</td><td>${cust.n}</td><td>${b.tot}</td><td>${b.paid}</td><td>${b.due}</td></tr>`;
  });
  tableHtml += `</table>`;

  const blob = new Blob([tableHtml], { type: "application/vnd.ms-excel" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `Al-Madina-Wholesale-Report-${getTodayDate()}.xls`;
  a.click();
}

/* ----------------------------------------------------------------------------
 * 17. MODULE: CLOUD SYNC & MANUAL BACKUP
 * ---------------------------------------------------------------------------- */
function ViewSyncBackup() {
  return `
    <div class="g g-2">
      <div class="card">
        <div class="card-title-bar">
          <h3 class="card-title">Remote Cloud Auto-Sync (JSON)</h3>
        </div>
        <p style="font-size:13px;color:var(--text-muted);margin-bottom:12px">
          Enter any HTTPS server or Firebase Realtime Database URL to automatically upload backups whenever online.
        </p>

        <label style="font-size:12px;font-weight:600;color:var(--text-muted)">Cloud Backup Endpoint (HTTPS)</label>
        <input type="url" id="cloud-endpoint-input" class="form-control" placeholder="https://your-server.com/api/fabric-pos.json" value="${DB.settings.cloudEndpoint || ''}" onchange="DB.settings.cloudEndpoint = this.value.trim(); saveDatabase()">

        <div style="margin-top:14px;display:flex;gap:10px">
          <button class="btn btn-primary" onclick="triggerManualSync()">🚀 Sync Now to Server</button>
        </div>
      </div>

      <div class="card">
        <div class="card-title-bar">
          <h3 class="card-title">Manual Offline Backup &amp; Restore</h3>
        </div>
        <p style="font-size:13px;color:var(--text-muted);margin-bottom:14px">
          Download complete database snapshot file to your phone/PC, or restore from a previous JSON file.
        </p>

        <div style="display:flex;gap:10px;flex-wrap:wrap">
          <button class="btn btn-warning" onclick="downloadDatabaseBackupFile()">⬇ Download Backup File (.json)</button>
          <label class="btn btn-outline" style="cursor:pointer">
            ⬆ Restore from File
            <input type="file" accept=".json" style="display:none" onchange="restoreDatabaseFromFile(this)">
          </label>
        </div>
      </div>
    </div>
  `;
}

function triggerManualSync() {
  if (!navigator.onLine) {
    showToast("Device is offline. Connect to internet first.", "warning");
    return;
  }
  if (!DB.settings.cloudEndpoint) {
    showToast("Please specify a cloud endpoint URL in Cloud & Backup settings", "warning");
    navigateTo("sync");
    return;
  }
  SyncEngine.pushData();
}

function downloadDatabaseBackupFile() {
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(DB, null, 2));
  const dlAnchor = document.createElement("a");
  dlAnchor.setAttribute("href", dataStr);
  dlAnchor.setAttribute("download", `Al-Madina-Fabrics-Backup-${getTodayDate()}.json`);
  dlAnchor.click();
}

function restoreDatabaseFromFile(input) {
  const file = input.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = e => {
    try {
      const restored = JSON.parse(e.target.result);
      if (restored && restored.items && restored.bills) {
        DB = restored;
        saveDatabase();
        showToast("Database restored successfully!", "success");
        renderCurrentView();
      } else {
        showToast("Invalid backup file format", "danger");
      }
    } catch (err) {
      showToast("Error parsing backup file", "danger");
    }
  };
  reader.readAsText(file);
}

/* ----------------------------------------------------------------------------
 * 18. MODULE: SYSTEM SETTINGS (Uneditable Business Details Display)
 * ---------------------------------------------------------------------------- */
function ViewSettings() {
  const isOwner = CURRENT_USER && CURRENT_USER.role === "Owner";

  return `
    <div class="g g-2">
      <!-- 1. PRINTER & THEME PREFERENCES -->
      <div class="card">
        <div class="card-title-bar">
          <h3 class="card-title">Printer &amp; Appearance</h3>
        </div>

        <div style="margin-bottom:12px">
          <label style="font-size:12px;font-weight:600;color:var(--text-muted)">Default Invoice Paper Size</label>
          <select class="form-control" onchange="DB.settings.billSize = this.value; saveDatabase()">
            <option value="A4" ${DB.settings.billSize === 'A4' ? 'selected' : ''}>A4 Full Commercial Bill</option>
            <option value="A5" ${DB.settings.billSize === 'A5' ? 'selected' : ''}>A5 Medium Invoice / Challan</option>
            <option value="80" ${DB.settings.billSize === '80' ? 'selected' : ''}>80mm Thermal POS Receipt</option>
          </select>
        </div>

        <div>
          <label style="font-size:12px;font-weight:600;color:var(--text-muted)">Display Theme</label>
          <select class="form-control" onchange="DB.settings.theme = this.value; saveDatabase(); applyTheme()">
            <option value="light" ${DB.settings.theme === 'light' ? 'selected' : ''}>Light Theme</option>
            <option value="dark" ${DB.settings.theme === 'dark' ? 'selected' : ''}>Dark Night Mode</option>
          </select>
        </div>
      </div>

      <!-- 2. CHANGE MY SECURITY PIN -->
      <div class="card">
        <div class="card-title-bar">
          <h3 class="card-title">🔐 Change My Security PIN</h3>
          <span class="badge badge-info">${CURRENT_USER.n}</span>
        </div>
        <p style="font-size:12px;color:var(--text-muted);margin-bottom:12px">
          Logged in as <b>${CURRENT_USER.n} (${CURRENT_USER.role})</b>. Update your personal terminal unlock PIN.
        </p>

        <div class="g g-3">
          <div>
            <label style="font-size:11px;font-weight:600;color:var(--text-muted)">Current PIN</label>
            <input type="password" id="my-old-pin" class="form-control" placeholder="Current PIN" inputmode="numeric">
          </div>
          <div>
            <label style="font-size:11px;font-weight:600;color:var(--text-muted)">New PIN (4+ digits)</label>
            <input type="password" id="my-new-pin" class="form-control" placeholder="New PIN" inputmode="numeric">
          </div>
          <div>
            <label style="font-size:11px;font-weight:600;color:var(--text-muted)">Confirm New PIN</label>
            <input type="password" id="my-confirm-pin" class="form-control" placeholder="Confirm PIN" inputmode="numeric">
          </div>
        </div>

        <div style="margin-top:14px">
          <button class="btn btn-primary" onclick="handleChangeUserPin()">Update My PIN</button>
        </div>
      </div>
    </div>

    <br>
    <!-- 3. EMPLOYEE & PERMISSION MANAGEMENT (OWNER ONLY) -->
    ${isOwner ? `
      <div class="card">
        <div class="card-title-bar">
          <div>
            <h3 class="card-title">👥 Staff &amp; Employee Access Control (Owner Admin)</h3>
            <small style="color:var(--text-muted)">Add employees, assign custom terminal PINs, and grant/revoke module access.</small>
          </div>
        </div>

        <!-- Add Employee Form -->
        <div class="g g-4" style="background:var(--bg-hover);padding:14px;border-radius:var(--radius-sm);margin-bottom:16px">
          <div>
            <label style="font-size:11px;font-weight:600;color:var(--text-muted)">Staff Name</label>
            <input type="text" id="new-emp-name" class="form-control" placeholder="e.g. Aslam Munshi">
          </div>
          <div>
            <label style="font-size:11px;font-weight:600;color:var(--text-muted)">Role / Designation</label>
            <input type="text" id="new-emp-role" class="form-control" placeholder="e.g. Counter Salesman" value="Staff">
          </div>
          <div>
            <label style="font-size:11px;font-weight:600;color:var(--text-muted)">Terminal PIN (4+ Digits)</label>
            <input type="password" id="new-emp-pin" class="form-control" placeholder="e.g. 5566" inputmode="numeric">
          </div>
          <div style="display:flex;align-items:flex-end">
            <button class="btn btn-warning btn-block" onclick="handleAddNewEmployee()">+ Add Employee</button>
          </div>
        </div>

        <!-- Employee List & Permission Matrix -->
        <div class="table-responsive">
          <table>
            <thead>
              <tr>
                <th>Employee</th>
                <th>Role</th>
                <th>PIN</th>
                <th>Allowed Modules &amp; Permissions</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              ${DB.users.map(u => `
                <tr>
                  <td><b>${u.n}</b></td>
                  <td><span class="badge ${u.role === 'Owner' ? 'badge-warning' : 'badge-info'}">${u.role}</span></td>
                  <td><code>••••</code></td>
                  <td>
                    <div style="display:flex;flex-wrap:wrap;gap:8px;max-width:540px">
                      ${Object.keys(NAV_MENU).filter(k => u.role === 'Owner' || (k !== 'set' && k !== 'sync')).map(k => `
                        <label style="display:inline-flex;align-items:center;gap:4px;font-size:11px;background:var(--bg-hover);padding:3px 8px;border-radius:4px;cursor:${u.role === 'Owner' ? 'default' : 'pointer'}">
                          <input type="checkbox" style="width:auto" ${u.perm.includes(k) ? 'checked' : ''} ${u.role === 'Owner' ? 'disabled' : ''} onchange="handleToggleEmployeePerm('${u.id}', '${k}', this.checked)">
                          ${NAV_MENU[k][1].split(' ')[0]}
                        </label>
                      `).join("")}
                    </div>
                  </td>
                  <td>
                    ${u.id !== 'owner' ? `
                      <button class="btn btn-danger btn-sm" onclick="handleDeleteEmployee('${u.id}')">Delete</button>
                    ` : `<span style="color:var(--text-muted);font-size:11px">Primary Admin</span>`}
                  </td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      </div>
      <br>
    ` : ''}

    <div class="card">
      <div class="card-title-bar">
        <h3 class="card-title">Registered Business Identity (System Locked)</h3>
      </div>
      <div style="background:var(--bg-hover);padding:14px;border-radius:var(--radius-sm)">
        <div style="font-weight:800;font-size:15px;color:var(--primary-navy)">${COMPANY_CONFIG.nameEn}</div>
        <div class="ur" style="font-size:16px;color:var(--accent-gold-dark)">${COMPANY_CONFIG.nameUr}</div>
        <div style="font-size:12px;color:var(--text-muted);margin-top:4px">${COMPANY_CONFIG.addressEn}</div>
        <div style="font-size:12px;color:var(--text-muted)">${COMPANY_CONFIG.phones.join(" • ")} | ${COMPANY_CONFIG.ntn}</div>
      </div>
    </div>
  `;
}

function handleChangeUserPin() {
  const oldPin = document.getElementById("my-old-pin").value.trim();
  const newPin = document.getElementById("my-new-pin").value.trim();
  const confirmPin = document.getElementById("my-confirm-pin").value.trim();

  if (oldPin !== CURRENT_USER.pin) {
    showToast("Current PIN is incorrect", "danger");
    return;
  }
  if (!newPin || newPin.length < 4) {
    showToast("New PIN must be at least 4 digits", "warning");
    return;
  }
  if (newPin !== confirmPin) {
    showToast("New PIN and Confirm PIN do not match", "danger");
    return;
  }

  // Update in state & DB
  CURRENT_USER.pin = newPin;
  const dbUser = DB.users.find(u => u.id === CURRENT_USER.id);
  if (dbUser) dbUser.pin = newPin;

  saveDatabase();
  showToast("Your security PIN has been updated successfully!", "success");
  document.getElementById("my-old-pin").value = "";
  document.getElementById("my-new-pin").value = "";
  document.getElementById("my-confirm-pin").value = "";
}

function handleAddNewEmployee() {
  const name = document.getElementById("new-emp-name").value.trim();
  const role = document.getElementById("new-emp-role").value.trim() || "Staff";
  const pin = document.getElementById("new-emp-pin").value.trim();

  if (!name || !pin || pin.length < 4) {
    showToast("Please enter employee name and a 4+ digit PIN", "warning");
    return;
  }

  const newId = "emp_" + Date.now();
  DB.users.push({
    id: newId,
    n: name,
    role: role,
    pin: pin,
    perm: ["pos", "bills", "cust", "stock"] // default wholesale front counter permissions
  });

  saveDatabase();
  showToast(`Added ${name} to system users`, "success");
  renderCurrentView();
}

function handleToggleEmployeePerm(userId, permKey, isChecked) {
  const user = DB.users.find(u => u.id === userId);
  if (!user) return;

  if (isChecked) {
    if (!user.perm.includes(permKey)) user.perm.push(permKey);
  } else {
    user.perm = user.perm.filter(p => p !== permKey);
  }

  // Ensure user has at least one permission
  if (user.perm.length === 0) user.perm = ["pos"];

  saveDatabase();
  showToast(`Updated permissions for ${user.n}`, "info");
}

function handleDeleteEmployee(userId) {
  if (userId === "owner") {
    showToast("Primary Owner cannot be deleted", "danger");
    return;
  }
  if (!confirm("Are you sure you want to remove this employee?")) return;

  DB.users = DB.users.filter(u => u.id !== userId);
  saveDatabase();
  showToast("Employee removed", "success");
  renderCurrentView();
}

function applyTheme() {
  if (DB.settings.theme === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.removeAttribute("data-theme");
  }
}

/* ----------------------------------------------------------------------------
 * 19. DOCUMENT GENERATOR & PRINT / PDF ENGINE
 * ---------------------------------------------------------------------------- */
let ActiveDocState = null;

function openInvoiceModal(bill) {
  const cust = DB.customers.find(c => c.id === bill.cid) || { n: "Walk-in Customer", ph: "" };
  ActiveDocState = {
    type: "bill",
    bill,
    customer: cust,
    title: `Commercial Bill #${bill.no}`,
    size: DB.settings.billSize || "A4"
  };

  document.getElementById("modal-doc-title").textContent = ActiveDocState.title;
  document.getElementById("modal-doc-size").value = ActiveDocState.size;
  document.getElementById("modal-whatsapp-phone").value = cust.ph || "";
  document.getElementById("document-modal").style.display = "flex";
  renderDocPreview();
}

function openChallanModal(bill) {
  const cust = DB.customers.find(c => c.id === bill.cid) || { n: "Walk-in Customer", ph: "" };
  ActiveDocState = {
    type: "challan",
    bill,
    customer: cust,
    title: `Delivery Challan #${bill.no}`,
    size: DB.settings.billSize || "A5"
  };

  document.getElementById("modal-doc-title").textContent = ActiveDocState.title;
  document.getElementById("modal-doc-size").value = ActiveDocState.size;
  document.getElementById("modal-whatsapp-phone").value = cust.ph || "";
  document.getElementById("document-modal").style.display = "flex";
  renderDocPreview();
}

function openLedgerPrintModal(typeKey, partyId) {
  const party = (typeKey === "c" ? DB.customers : typeKey === "s" ? DB.suppliers : DB.brokers).find(p => p.id === partyId);
  const entries = DB.ledgers.filter(l => l.t === typeKey && l.p === partyId);
  ActiveDocState = {
    type: "ledger",
    party,
    entries,
    title: `Account Statement – ${party.n}`,
    size: "A4"
  };

  document.getElementById("modal-doc-title").textContent = ActiveDocState.title;
  document.getElementById("modal-doc-size").value = ActiveDocState.size;
  document.getElementById("modal-whatsapp-phone").value = party.ph || "";
  document.getElementById("document-modal").style.display = "flex";
  renderDocPreview();
}

function closeDocModal() {
  document.getElementById("document-modal").style.display = "none";
  ActiveDocState = null;
}

function renderDocPreview() {
  if (!ActiveDocState) return;
  const size = document.getElementById("modal-doc-size").value;
  ActiveDocState.size = size;

  const canvas = document.getElementById("doc-preview-canvas");
  const html = generateDocumentHtml(ActiveDocState, size);
  canvas.innerHTML = html;

  // Set visual width based on size
  canvas.style.width = size === "A4" ? "794px" : size === "A5" ? "559px" : "300px";
  canvas.style.maxWidth = "100%";
  canvas.style.overflow = "hidden";
}

function generateDocumentHtml(docState, size) {
  const isThermal = size === "80";

  // Common Business Header
  const headerHtml = isThermal ? `
    <div style="text-align: center; border-bottom: 2px dashed #0d2347; padding-bottom: 8px; margin-bottom: 10px;">
      <div class="ur" style="font-size: 20px; color: #0d2347; font-weight: 700; line-height: 2 !important; display:block">${COMPANY_CONFIG.nameUr}</div>
      <b style="font-size: 13px; color: #0d2347; display: block; margin-top:2px">${COMPANY_CONFIG.nameEn}</b>
      <small style="color: #64748b; font-size: 10px; display: block">${COMPANY_CONFIG.taglineEn}</small>
      <small style="color: #64748b; font-size: 10px; display: block">${COMPANY_CONFIG.addressEn}</small>
      <small style="color: #0d2347; font-size: 10px; font-weight: 600; display: block">Ph: ${COMPANY_CONFIG.phones[0]} • ${COMPANY_CONFIG.ntn}</small>
      <div style="margin-top: 6px">
        <span style="border: 1px solid #0d2347; padding: 2px 8px; font-weight: 800; font-size: 11px; border-radius: 3px; display: inline-block">${docState.title}</span>
      </div>
    </div>
  ` : `
    <div style="border-bottom: 2px solid #0d2347; padding-bottom: 8px; margin-bottom: 12px; display: flex; justify-content: space-between; align-items: center">
      <div>
        <div class="ur" style="font-size: 22px; color: #0d2347; font-weight: 700; line-height: 2 !important">${COMPANY_CONFIG.nameUr}</div>
        <b style="font-size: 16px; color: #0d2347; display: block">${COMPANY_CONFIG.nameEn}</b>
        <small style="color: #64748b; display: block">${COMPANY_CONFIG.taglineEn}</small>
        <small style="color: #64748b; display: block">${COMPANY_CONFIG.addressEn} • Ph: ${COMPANY_CONFIG.phones[0]}</small>
      </div>
      <div style="text-align: right">
        <span style="border: 2px solid #0d2347; padding: 4px 10px; font-weight: 800; font-size: 14px; border-radius: 4px; display: inline-block">${docState.title}</span><br>
        <small style="color: #64748b">${COMPANY_CONFIG.ntn}</small>
      </div>
    </div>
  `;

  // ==========================================
  // 1. COMMERCIAL WHOLESALE BILL
  // ==========================================
  if (docState.type === "bill") {
    const b = docState.bill;

    if (isThermal) {
      // 80mm THERMAL RECEIPT LAYOUT (Clean, zero horizontal overflow)
      return `
        <div style="padding: 10px 8px; font-family: 'Plus Jakarta Sans', sans-serif; color: #0f172a; line-height: 1.4; font-size: 11px; background: #fff; width: 100%; box-sizing: border-box; overflow: hidden">
          ${headerHtml}

          <div style="background: #f8fafc; border: 1px dashed #cbd5e1; padding: 6px 8px; border-radius: 4px; margin-bottom: 8px; font-size: 11px">
            <div style="display:flex; justify-content:space-between">
              <b>Bill #: ${b.no}</b>
              <span>${b.d} ${b.t}</span>
            </div>
            <div><b>Customer:</b> ${docState.customer.n} (${docState.customer.city || 'Local'})</div>
            ${b.transport ? `<div><b>Transport:</b> ${b.transport} ${b.biltyNo ? `• Bilty: ${b.biltyNo}` : ''}</div>` : ''}
          </div>

          <!-- 80mm Compact 2-Column Table (Fits 100%) -->
          <table style="width: 100%; border-collapse: collapse; table-layout: fixed; margin-bottom: 8px; font-size: 11px">
            <thead>
              <tr style="border-bottom: 1.5px solid #0d2347">
                <th style="padding: 4px 0; text-align: left; width: 62%; font-size: 10px">ITEM / LOT / QTY</th>
                <th style="padding: 4px 0; text-align: right; width: 38%; font-size: 10px">AMOUNT</th>
              </tr>
            </thead>
            <tbody>
              ${b.items.map(it => `
                <tr style="border-bottom: 1px dashed #e2e8f0">
                  <td style="padding: 4px 0; word-break: break-word">
                    <b style="display:block; font-size: 11px">${it.name}</b>
                    <small style="color: #64748b; display:block">Lot: ${it.lot} • ${it.than} Than (${it.qty} ${it.unit} @ Rs ${it.rate})</small>
                  </td>
                  <td style="padding: 4px 0; text-align: right; vertical-align: top; font-weight: 700">
                    ${formatMoney(it.amount)}
                  </td>
                </tr>
              `).join("")}
            </tbody>
          </table>

          <!-- 80mm Stacked Totals -->
          <table style="width: 100%; border-collapse: collapse; font-size: 11px; margin-bottom: 8px">
            <tr><td style="padding: 2px 0">Subtotal:</td><td style="padding: 2px 0; text-align: right"><b>${formatMoney(b.subtotal)}</b></td></tr>
            ${b.discount > 0 ? `<tr><td style="padding: 2px 0">Discount:</td><td style="padding: 2px 0; text-align: right">− ${formatMoney(b.discount)}</td></tr>` : ''}
            <tr style="border-top: 1.5px solid #0d2347; border-bottom: 1.5px solid #0d2347; font-size: 12px; font-weight: 800">
              <td style="padding: 4px 0">Total Amount:</td>
              <td style="padding: 4px 0; text-align: right">${formatMoney(b.tot)}</td>
            </tr>
            <tr><td style="padding: 2px 0">Paid Amount:</td><td style="padding: 2px 0; text-align: right">${formatMoney(b.paid)}</td></tr>
            ${b.due > 0 ? `
              <tr style="font-weight: 700; color: #b91c1c; border-top: 1px dashed #cbd5e1">
                <td style="padding: 3px 0">Balance Due:</td>
                <td style="padding: 3px 0; text-align: right">${formatMoney(b.due)}</td>
              </tr>
            ` : ''}
          </table>

          <!-- 80mm Full Width Urdu & English Terms Below -->
          <div style="border-top: 1px dashed #cbd5e1; padding-top: 6px; text-align: center; font-size: 10px; color: #475569">
            <div class="ur" style="color: #b91c1c; font-size: 11px; line-height: 1.9 !important; display:block">${COMPANY_CONFIG.termsUr}</div>
            <div style="margin-top: 2px">${COMPANY_CONFIG.termsEn}</div>
            <div style="margin-top: 6px; font-weight: 700; color: #0d2347">Thank you for your business!</div>
          </div>
        </div>
      `;
    }

    // A4 / A5 COMMERCIAL BILL LAYOUT (Pro Multi-Column Fixed-Table)
    return `
      <div style="padding: 24px; font-family: 'Plus Jakarta Sans', sans-serif; color: #0f172a; line-height: 1.45; font-size: 13px; background: #fff; width: 100%; box-sizing: border-box; overflow: hidden">
        ${headerHtml}

        <div style="display:flex; justify-content:space-between; margin-bottom: 14px; font-size:12px; background:#f8fafc; padding:8px 12px; border-radius:4px">
          <div>
            <b>Billed To:</b> ${docState.customer.n} (${docState.customer.city || 'Local'})<br>
            <b>Transport / Adda:</b> ${b.transport || 'Local Delivery'}
          </div>
          <div style="text-align:right">
            <b>Invoice #:</b> ${b.no}<br>
            <b>Date / Time:</b> ${b.d} ${b.t}<br>
            <b>Bilty #:</b> ${b.biltyNo || 'N/A'}
          </div>
        </div>

        <table style="width:100%; border-collapse:collapse; table-layout:fixed; margin-bottom: 14px">
          <thead>
            <tr style="background:#0d2347; color:#fff">
              <th style="padding:6px 8px; text-align:left; font-size:11px; width:34%">Item Description</th>
              <th style="padding:6px 8px; text-align:center; font-size:11px; width:12%">Lot #</th>
              <th style="padding:6px 8px; text-align:center; font-size:11px; width:12%">Than</th>
              <th style="padding:6px 8px; text-align:right; font-size:11px; width:14%">Meters/Qty</th>
              <th style="padding:6px 8px; text-align:right; font-size:11px; width:12%">Rate</th>
              <th style="padding:6px 8px; text-align:right; font-size:11px; width:16%">Total</th>
            </tr>
          </thead>
          <tbody>
            ${b.items.map(it => `
              <tr style="border-bottom: 1px solid #e2e8f0">
                <td style="padding:6px 8px; word-break:break-word"><b>${it.name}</b></td>
                <td style="padding:6px 8px; text-align:center">${it.lot}</td>
                <td style="padding:6px 8px; text-align:center">${it.than} Than</td>
                <td style="padding:6px 8px; text-align:right">${it.qty} ${it.unit}</td>
                <td style="padding:6px 8px; text-align:right">Rs ${it.rate}</td>
                <td style="padding:6px 8px; text-align:right"><b>${formatMoney(it.amount)}</b></td>
              </tr>
            `).join("")}
          </tbody>
        </table>

        <div style="display:flex; justify-content:space-between; align-items:flex-start">
          <div style="width:50%; font-size:11px; color:#475569">
            <div class="ur" style="color:#b91c1c; font-size:12px; line-height:2 !important">${COMPANY_CONFIG.termsUr}</div>
            <div>${COMPANY_CONFIG.termsEn}</div>
          </div>

          <table style="width:45%; border-collapse:collapse; font-size:12px; margin-left:auto">
            <tr><td style="padding:3px 6px">Subtotal:</td><td style="padding:3px 6px; text-align:right">${formatMoney(b.subtotal)}</td></tr>
            ${b.discount > 0 ? `<tr><td style="padding:3px 6px">Discount:</td><td style="padding:3px 6px; text-align:right">− ${formatMoney(b.discount)}</td></tr>` : ''}
            <tr style="background:#0d2347; color:#fff; font-weight:800"><td style="padding:6px">Total Amount:</td><td style="padding:6px; text-align:right; color:#eab308">${formatMoney(b.tot)}</td></tr>
            <tr><td style="padding:3px 6px">Paid Amount:</td><td style="padding:3px 6px; text-align:right">${formatMoney(b.paid)}</td></tr>
            <tr style="border-top:1px solid #0d2347; font-weight:700; color:#b91c1c"><td style="padding:3px 6px">Balance Due:</td><td style="padding:3px 6px; text-align:right">${formatMoney(b.due)}</td></tr>
          </table>
        </div>

        <div style="margin-top:24px; display:flex; justify-content:space-between; font-size:11px; border-top:1px dashed #cbd5e1; padding-top:10px">
          <div>Transporter Signature: _________________</div>
          <div>Authorized Signature: _________________</div>
        </div>
      </div>
    `;
  }

  // ==========================================
  // 2. DELIVERY CHALLAN (GATE PASS)
  // ==========================================
  if (docState.type === "challan") {
    const b = docState.bill;
    return `
      <div style="padding: ${isThermal ? '10px 8px' : '24px'}; font-family: 'Plus Jakarta Sans', sans-serif; background: #fff; width: 100%; box-sizing: border-box; overflow: hidden">
        ${headerHtml}
        <div style="background:#fef3c7; padding:6px 10px; border-radius:4px; font-weight:700; color:#92400e; font-size:11px; text-align:center; margin-bottom:10px">
          GATE DELIVERY CHALLAN • NO FINANCIAL VALUE
        </div>

        <div style="display:flex; justify-content:space-between; margin-bottom:10px; font-size:11px; background:#f8fafc; padding:6px 8px; border-radius:4px">
          <div>
            <b>Consignee:</b> ${docState.customer.n} (${docState.customer.city || 'City'})<br>
            <b>Transport:</b> ${b.transport || 'Direct'}
          </div>
          <div style="text-align:right">
            <b>Challan #:</b> CH-${b.no}<br>
            <b>Bilty #:</b> ${b.biltyNo || 'N/A'}<br>
            <b>Date:</b> ${b.d}
          </div>
        </div>

        <table style="width:100%; border-collapse:collapse; table-layout:fixed; margin-bottom:12px; font-size:11px">
          <thead>
            <tr style="background:#0d2347; color:#fff">
              <th style="padding:6px; text-align:left; width: ${isThermal ? '55%' : '40%'}">Fabric Quality</th>
              <th style="padding:6px; text-align:center; width: ${isThermal ? '20%' : '20%'}">Lot #</th>
              <th style="padding:6px; text-align:center; width: ${isThermal ? '25%' : '20%'}">Than</th>
              ${!isThermal ? '<th style="padding:6px; text-align:right; width:20%">Total Quantity</th>' : ''}
            </tr>
          </thead>
          <tbody>
            ${b.items.map(it => `
              <tr style="border-bottom:1px solid #e2e8f0">
                <td style="padding:6px; word-break:break-word"><b>${it.name}</b></td>
                <td style="padding:6px; text-align:center">${it.lot}</td>
                <td style="padding:6px; text-align:center"><b>${it.than} Than</b></td>
                ${!isThermal ? `<td style="padding:6px; text-align:right">${it.qty} ${it.unit}</td>` : ''}
              </tr>
            `).join("")}
          </tbody>
        </table>

        <div style="margin-top:20px; display:flex; justify-content:space-between; font-size:11px">
          <div>Driver Signature: ______________</div>
          <div>Gate Outward Stamp: ______________</div>
        </div>
      </div>
    `;
  }

  // ==========================================
  // 3. ACCOUNT STATEMENT (KHATA PRINT)
  // ==========================================
  if (docState.type === "ledger") {
    let run = 0;
    return `
      <div style="padding: ${isThermal ? '10px 8px' : '24px'}; font-family: 'Plus Jakarta Sans', sans-serif; background: #fff; width: 100%; box-sizing: border-box; overflow: hidden">
        ${headerHtml}
        <h4 style="margin-bottom:8px">Account Statement: ${docState.party.n} (${docState.party.city || 'Local'})</h4>
        <table style="width:100%; border-collapse:collapse; table-layout:fixed; font-size:11px">
          <thead>
            <tr style="background:#0d2347; color:#fff">
              <th style="padding:6px; text-align:left; width:18%">Date</th>
              <th style="padding:6px; text-align:left; width:34%">Description</th>
              <th style="padding:6px; text-align:right; width:16%">Debit</th>
              <th style="padding:6px; text-align:right; width:16%">Credit</th>
              <th style="padding:6px; text-align:right; width:16%">Balance</th>
            </tr>
          </thead>
          <tbody>
            ${docState.entries.map(e => {
              run += e.a;
              return `
                <tr style="border-bottom:1px solid #e2e8f0">
                  <td style="padding:5px 6px">${e.d}</td>
                  <td style="padding:5px 6px; word-break:break-word">${e.n}</td>
                  <td style="padding:5px 6px; text-align:right; color:#dc2626">${e.a > 0 ? formatMoney(e.a) : ''}</td>
                  <td style="padding:5px 6px; text-align:right; color:#16a34a">${e.a < 0 ? formatMoney(-e.a) : ''}</td>
                  <td style="padding:5px 6px; text-align:right"><b>${formatMoney(run)}</b></td>
                </tr>
              `;
            }).join("")}
          </tbody>
        </table>
      </div>
    `;
  }

  return "";
}

function executeDocPrint() {
  if (!ActiveDocState) return;
  const size = ActiveDocState.size;
  const stage = document.getElementById("print-stage");
  stage.innerHTML = generateDocumentHtml(ActiveDocState, size);

  // Set dynamic @page style for thermal vs A4/A5
  let printStyle = document.getElementById("dynamic-print-style");
  if (!printStyle) {
    printStyle = document.createElement("style");
    printStyle.id = "dynamic-print-style";
    document.head.appendChild(printStyle);
  }

  if (size === "80") {
    printStyle.textContent = `@page { size: 80mm auto; margin: 0; } body { margin: 0; } .print-stage { width: 74mm !important; margin: 0 auto !important; padding: 2mm !important; box-sizing: border-box !important; }`;
  } else if (size === "A5") {
    printStyle.textContent = `@page { size: A5; margin: 6mm; } .print-stage { width: 100% !important; }`;
  } else {
    printStyle.textContent = `@page { size: A4; margin: 8mm; } .print-stage { width: 100% !important; }`;
  }

  setTimeout(() => {
    window.print();
  }, 150);
}

function executeDocPdfDownload() {
  if (!ActiveDocState) return;
  const element = document.getElementById("doc-preview-canvas");
  const filename = `${ActiveDocState.title.replace(/\s+/g, "_")}_${getTodayDate()}.pdf`;

  const isThermal = ActiveDocState.size === "80";
  const opt = {
    margin: isThermal ? 2 : 5,
    filename,
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2.5, useCORS: true, scrollX: 0, scrollY: 0 },
    jsPDF: {
      unit: "mm",
      format: isThermal ? [80, 200] : ActiveDocState.size.toLowerCase()
    }
  };

  html2pdf().set(opt).from(element).save();
}

function executeDocWhatsAppShare() {
  if (!ActiveDocState) return;
  const phone = document.getElementById("modal-whatsapp-phone").value.replace(/\D/g, "");
  if (!phone) {
    showToast("Please enter a WhatsApp number", "warning");
    return;
  }

  const formattedPhone = phone.startsWith("0") ? "92" + phone.slice(1) : phone;
  const bill = ActiveDocState.bill;
  let text = "";

  if (bill) {
    text = encodeURIComponent(
      `السلام علیکم ${ActiveDocState.customer.n} صاحب!\n\n` +
      `المدینہ فیبرکس اینڈ ٹیکسٹائل ٹریڈنگ فیصل آباد کی طرف سے آپ کا بل #${bill.no} تیار ہے۔\n` +
      `کل رقم: ${formatMoney(bill.tot)}\n` +
      `ادا شدہ: ${formatMoney(bill.paid)}\n` +
      `بقایا کھاتہ: ${formatMoney(bill.due)}\n` +
      `بلٹی نمبر: ${bill.biltyNo || 'لوکل ہینڈ اوور'}\n\n` +
      `شکریہ!\nرابطہ: ${COMPANY_CONFIG.phones[0]}`
    );
  } else {
    text = encodeURIComponent(`Assalam o Alaikum, please find attached statement from Al-Madina Fabrics.`);
  }

  window.open(`https://wa.me/${formattedPhone}?text=${text}`, "_blank");
}

/* ----------------------------------------------------------------------------
 * 20. APPLICATION BOOTSTRAP
 * ---------------------------------------------------------------------------- */
window.addEventListener("DOMContentLoaded", () => {
  loadDatabase();
  initAuth();
  SyncEngine.init();
  applyTheme();
  initChartTooltips();

  // Restore session if active
  const hasSession = checkAutoLoginSession();
  if (hasSession) {
    console.log("Restored active user session:", CURRENT_USER.n);
  }

  // Realtime clock
  setInterval(() => {
    const clockEl = document.getElementById("realtime-clock");
    if (clockEl) {
      clockEl.textContent = new Date().toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", second: "2-digit" });
    }
  }, 1000);
});
