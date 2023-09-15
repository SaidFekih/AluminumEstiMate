<script setup></script>

<template>
    <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 text-white bg-main-dark-color">
        <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
            <a href="/" class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                <span class="fs-5 d-none d-sm-inline">Menu</span>
            </a>
            <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                <li class="nav-item">
                    <a href="#" class="nav-link align-middle px-0">
                        <i class="fs-4 bi-house"></i>
                        <span class="ms-1 d-none d-sm-inline">Home</span>
                    </a>
                </li>
                <li>
                    <a href="#submenu1" data-bs-toggle="collapse" class="nav-link px-0 align-middle">
                        <i class="fs-4 bi-speedometer2"></i>
                        <span class="ms-1 d-none d-sm-inline">Dashboard</span>
                    </a>
                    <ul class="collapse show nav flex-column ms-1" id="submenu1" data-bs-parent="#menu">
                        <li class="w-100">
                            <a href="#" class="nav-link px-0">
                                <span class="d-none d-sm-inline">Dash</span> 1
                            </a>
                        </li>
                        <li>
                            <a href="#" class="nav-link px-0">
                                <span class="d-none d-sm-inline">Dash</span> 2
                            </a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="#" class="nav-link px-0 align-middle">
                        <i class="fs-4 bi-table"></i>
                        <span class="ms-1 d-none d-sm-inline">Projets</span></a>
                </li>
                <li>
                    <a href="#submenu3" data-bs-toggle="collapse" class="nav-link px-0 align-middle">
                        <i class="fs-4 bi-grid"></i>
                        <span class="ms-1 d-none d-sm-inline">Produits</span>
                    </a>
                    <ul class="collapse nav flex-column ms-1" id="submenu3" data-bs-parent="#menu">
                        <li class="w-100">
                            <a href="#" class="nav-link px-0">
                                <span class="d-none d-sm-inline">Produit</span> 1</a>
                        </li>
                        <li>
                            <a href="#" class="nav-link px-0">
                                <span class="d-none d-sm-inline">Produit</span> 2</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="#" class="nav-link px-0 align-middle">
                        <i class="fs-4 bi-people"></i>
                        <span class="ms-1 d-none d-sm-inline">Clients</span>
                    </a>
                </li>
            </ul>
            <hr />
            <div class="dropdown pb-4">
                <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
                    id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="../assets/imgs/alu1.jpg" alt="hugenerd" width="30" height="30" class="rounded-circle" />
                    <span class="d-none d-sm-inline mx-1">Said</span>
                </a>
                <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
                    id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                    <p class="rounded-circle pastille justify-content-center align-items-center text-center m-0">SF
                    </p>
                    <span class="d-none d-sm-inline mx-1">Said</span>
                </a>

                <ul class="dropdown-menu dropdown-menu-dark text-small shadow">
                    <li><a class="dropdown-item" href="#">Paramètres</a></li>
                    <li><a class="dropdown-item" href="#">Profil</a></li>
                    <li>
                        <hr class="dropdown-divider" />
                    </li>
                    <li><a class="dropdown-item" href="#">Se déconnecter</a></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style scoped>
span,
i,
a {
    color: var(--gwx-text-light-color);
}

span:hover,
i:hover,
a:hover {
    color: var(--gwx-text-light-color);
    transform: scale(1.1);
}

.pastille {
    background-color: var(--gwx-secondary-color);
    color: var(--gwx-text-light-color);
    font-size: 1.2rem;
    height: 30px;
    width: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
