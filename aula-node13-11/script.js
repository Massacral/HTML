// Dados do cardápio
const menuItems = [
    {
        id: 1,
        name: "Sushi Salmão",
        category: "sushi",
        price: 24.90,
        image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=740&q=80",
        description: "Salmão fresco sobre arroz temperado"
    },
    {
        id: 2,
        name: "Sashimi Atum",
        category: "sashimi",
        price: 32.90,
        image: "https://images.unsplash.com/photo-1563612116625-3012372fccce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=740&q=80",
        description: "Fatias finas de atum de alta qualidade"
    },
    {
        id: 3,
        name: "Temaki Salmão",
        category: "temaki",
        price: 18.90,
        image: "https://images.unsplash.com/photo-1553621042-f6e147245754?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=740&q=80",
        description: "Cone de alga nori recheado com salmão"
    },
    {
        id: 4,
        name: "Hot Roll",
        category: "sushi",
        price: 22.90,
        image: "https://images.unsplash.com/photo-1617196034796-73b88699f19a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=740&q=80",
        description: "Sushi empanado e frito com molho especial"
    },
    {
        id: 5,
        name: "Sashimi Salmão",
        category: "sashimi",
        price: 28.90,
        image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=740&q=80",
        description: "Fatias finas de salmão fresco"
    },
    {
        id: 6,
        name: "Temaki Camarão",
        category: "temaki",
        price: 21.90,
        image: "https://images.unsplash.com/photo-1553621042-f6e147245754?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=740&q=80",
        description: "Cone de alga nori recheado com camarão"
    },
    {
        id: 7,
        name: "Yakissoba",
        category: "hot",
        price: 35.90,
        image: "https://images.unsplash.com/photo-1555126634-323283a090fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=740&q=80",
        description: "Macarrão salteado com legumes e carne"
    },
    {
        id: 8,
        name: "Coca cola",
        category: "bebidas",
        price: 6.00,
        image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=740&q=80",
        description: "Refrigerante coca cola 350ml"
    },
    {
        id: 8,
        name: "Guaraná",
        category: "bebidas",
        price: 6.00,
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_934424-MLB77327571551_062024-F.webp",
        description: "Refrigerante guaraná 350ml"
    },
    {
        id: 9,
        name: "Pepsi",
        category: "bebidas",
        price: 6.00,
        image: "https://m.media-amazon.com/images/I/51By-TTpS2L._AC_.jpg",
        description: "Refrigerante pepsi 350ml"
    },
    {
        id: 9,
        name: "Heineken",
        category: "bebidas",
        price: 12.00,
        image: "https://cardapio.octosushi.com.br/wp-content/uploads/2023/11/hek-768x768.png",
        description: "Heinenken 330ml"
    },
    {
        id: 9,
        name: "Sake Quente",
        category: "bebidas",
        price: 18.90,
        image: "https://images.unsplash.com/photo-1580712324763-b32dc74ba88c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=740&q=80",
        description: "Sake tradicional aquecido"
    },
    {
        id: 10,
        name: "Uramaki Filadélfia",
        category: "sushi",
        price: 29.90,
        image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=740&q=80",
        description: "Sushi invertido com cream cheese e salmão"
    },
    {
        id: 11,
        name: "Sashimi Peixe Branco",
        category: "sashimi",
        price: 26.90,
        image: "https://images.unsplash.com/photo-1563612116625-3012372fccce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=740&q=80",
        description: "Fatias finas de peixe branco fresco"
    },
    {
        id: 12,
        name: "Temaki Vegetariano",
        category: "temaki",
        price: 16.90,
        image: "https://images.unsplash.com/photo-1553621042-f6e147245754?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=740&q=80",
        description: "Cone de alga nori recheado com legumes"
    }
];

// Variáveis globais
let cart = [];
let currentSlide = 0;
let slideInterval;

// Inicialização quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
    initializeCarousel();
    renderMenuItems();
    setupEventListeners();
    loadCartFromStorage();
    updateCartUI();
});

// Configurar os event listeners
function setupEventListeners() {
    // Navegação móvel
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Fechar menu ao clicar em um link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // Carrinho
    const cartToggle = document.getElementById('cart-toggle');
    const closeCart = document.getElementById('close-cart');
    const cartSidebar = document.getElementById('cart-sidebar');
    
    cartToggle.addEventListener('click', function(e) {
        e.preventDefault();
        cartSidebar.classList.add('active');
    });
    
    closeCart.addEventListener('click', function() {
        cartSidebar.classList.remove('active');
    });
    
    // Finalizar pedido
    const checkoutBtn = document.getElementById('checkout-btn');
    checkoutBtn.addEventListener('click', function() {
        if (cart.length === 0) {
            alert('Seu carrinho está vazio!');
            return;
        }
        
        // Simulação de finalização de pedido
        const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        alert(`Pedido finalizado com sucesso! Total: R$ ${total.toFixed(2)}`);
        
        // Limpar carrinho
        cart = [];
        saveCartToStorage();
        updateCartUI();
        cartSidebar.classList.remove('active');
    });
    
    // Filtros do cardápio
    const categoryBtns = document.querySelectorAll('.category-btn');
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remover classe active de todos os botões
            categoryBtns.forEach(b => b.classList.remove('active'));
            // Adicionar classe active ao botão clicado
            this.classList.add('active');
            
            // Filtrar itens do menu
            const category = this.getAttribute('data-category');
            renderMenuItems(category);
        });
    });
    
    // Formulário de contato
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Simulação de envio do formulário
        const name = document.getElementById('name').value;
        alert(`Obrigado, ${name}! Sua mensagem foi enviada com sucesso.`);
        contactForm.reset();
    });
}

// Carrossel
function initializeCarousel() {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    
    // Configurar intervalo automático
    slideInterval = setInterval(nextSlide, 5000);
    
    // Event listeners para os botões
    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);
    
    // Event listeners para os dots
    dots.forEach(dot => {
        dot.addEventListener('click', function() {
            const slideIndex = parseInt(this.getAttribute('data-slide'));
            goToSlide(slideIndex);
        });
    });
    
    // Pausar carrossel quando o mouse estiver sobre ele
    const carouselContainer = document.querySelector('.carousel-container');
    carouselContainer.addEventListener('mouseenter', function() {
        clearInterval(slideInterval);
    });
    
    carouselContainer.addEventListener('mouseleave', function() {
        slideInterval = setInterval(nextSlide, 5000);
    });
}

function nextSlide() {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    
    // Remover classe active do slide atual
    slides[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');
    
    // Avançar para o próximo slide
    currentSlide = (currentSlide + 1) % slides.length;
    
    // Adicionar classe active ao novo slide
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}

function prevSlide() {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    
    // Remover classe active do slide atual
    slides[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');
    
    // Voltar para o slide anterior
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    
    // Adicionar classe active ao novo slide
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}

function goToSlide(slideIndex) {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    
    // Remover classe active do slide atual
    slides[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');
    
    // Ir para o slide especificado
    currentSlide = slideIndex;
    
    // Adicionar classe active ao novo slide
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}

// Renderizar itens do menu
function renderMenuItems(category = 'all') {
    const menuItemsContainer = document.getElementById('menu-items');
    
    // Filtrar itens por categoria
    const filteredItems = category === 'all' 
        ? menuItems 
        : menuItems.filter(item => item.category === category);
    
    // Limpar container
    menuItemsContainer.innerHTML = '';
    
    // Adicionar itens filtrados
    filteredItems.forEach(item => {
        const menuItemElement = document.createElement('div');
        menuItemElement.className = 'menu-item';
        menuItemElement.innerHTML = `
            <div class="menu-item-img">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="menu-item-content">
                <div class="menu-item-title">
                    <h3>${item.name}</h3>
                    <span class="menu-item-price">R$ ${item.price.toFixed(2)}</span>
                </div>
                <p class="menu-item-description">${item.description}</p>
                <button class="add-to-cart" data-id="${item.id}">Adicionar ao Carrinho</button>
            </div>
        `;
        
        menuItemsContainer.appendChild(menuItemElement);
    });
    
    // Adicionar event listeners aos botões de adicionar ao carrinho
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function() {
            const itemId = parseInt(this.getAttribute('data-id'));
            addToCart(itemId);
        });
    });
}

// Funções do carrinho
function addToCart(itemId) {
    const item = menuItems.find(menuItem => menuItem.id === itemId);
    
    if (item) {
        // Verificar se o item já está no carrinho
        const existingItem = cart.find(cartItem => cartItem.id === itemId);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({
                ...item,
                quantity: 1
            });
        }
        
        // Atualizar UI e salvar no localStorage
        updateCartUI();
        saveCartToStorage();
        
        // Mostrar mensagem de confirmação
        showNotification(`${item.name} adicionado ao carrinho!`);
    }
}

function removeFromCart(itemId) {
    cart = cart.filter(item => item.id !== itemId);
    updateCartUI();
    saveCartToStorage();
}

function updateQuantity(itemId, change) {
    const item = cart.find(cartItem => cartItem.id === itemId);
    
    if (item) {
        item.quantity += change;
        
        // Se a quantidade for 0, remover o item
        if (item.quantity <= 0) {
            removeFromCart(itemId);
        } else {
            updateCartUI();
            saveCartToStorage();
        }
    }
}

function updateCartUI() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalPrice = document.getElementById('cart-total-price');
    const cartCount = document.querySelector('.cart-count');
    
    // Limpar container
    cartItemsContainer.innerHTML = '';
    
    // Calcular total
    let total = 0;
    
    // Adicionar itens ao carrinho
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p class="empty-cart">Seu carrinho está vazio</p>';
    } else {
        cart.forEach(item => {
            const itemTotal = item.price * item.quantity;
            total += itemTotal;
            
            const cartItemElement = document.createElement('div');
            cartItemElement.className = 'cart-item';
            cartItemElement.innerHTML = `
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <p class="cart-item-price">R$ ${item.price.toFixed(2)}</p>
                </div>
                <div class="cart-item-quantity">
                    <button class="quantity-btn decrease" data-id="${item.id}">-</button>
                    <span class="quantity-value">${item.quantity}</span>
                    <button class="quantity-btn increase" data-id="${item.id}">+</button>
                    <button class="remove-item" data-id="${item.id}"><i class="fas fa-trash"></i></button>
                </div>
            `;
            
            cartItemsContainer.appendChild(cartItemElement);
        });
        
        // Adicionar event listeners aos botões de quantidade
        document.querySelectorAll('.quantity-btn.decrease').forEach(button => {
            button.addEventListener('click', function() {
                const itemId = parseInt(this.getAttribute('data-id'));
                updateQuantity(itemId, -1);
            });
        });
        
        document.querySelectorAll('.quantity-btn.increase').forEach(button => {
            button.addEventListener('click', function() {
                const itemId = parseInt(this.getAttribute('data-id'));
                updateQuantity(itemId, 1);
            });
        });
        
        document.querySelectorAll('.remove-item').forEach(button => {
            button.addEventListener('click', function() {
                const itemId = parseInt(this.getAttribute('data-id'));
                removeFromCart(itemId);
            });
        });
    }
    
    // Atualizar total e contador
    cartTotalPrice.textContent = total.toFixed(2);
    cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
}

// Armazenamento local
function saveCartToStorage() {
    localStorage.setItem('sakuraSushiCart', JSON.stringify(cart));
}

function loadCartFromStorage() {
    const savedCart = localStorage.getItem('sakuraSushiCart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
}

// Notificações
function showNotification(message) {
    // Criar elemento de notificação
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    
    // Estilos da notificação
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background-color: #4CAF50;
        color: white;
        padding: 15px 20px;
        border-radius: 4px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        z-index: 1002;
        transition: transform 0.3s ease, opacity 0.3s ease;
        transform: translateX(100%);
        opacity: 0;
    `;
    
    // Adicionar ao DOM
    document.body.appendChild(notification);
    
    // Animação de entrada
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
        notification.style.opacity = '1';
    }, 10);
    
    // Remover após 3 segundos
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        notification.style.opacity = '0';
        
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
    // Adicione este código ao seu script.js para o efeito de scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
}