
export const routers = {
  home: '/dashboard',
  product: '/products',

  notFound: '/404',
  productDetail: '/product',
  productCreate: '/product/create',
  // check permission
  categoryCreate: '/category/create',
  
};

const apiBase = 'http://localhost:3100/api/';
export const api = {
  productListFeatured: apiBase + 'v1/product-list/featured',
  adminLogin: apiBase + 'v1/admin/login',
  adminLogout: apiBase + 'v1/admin/logout',
  adminVerify: apiBase + 'v1/admin/verify',

  productList: apiBase + 'v1/product/list',
  adminProductSave: apiBase + 'v1/admin/product/save',

  sliderList: apiBase + 'v1/slider/list',
  adminSliderSave: apiBase + 'v1/admin/slider/save',

  categoryIDList: apiBase + 'v1/category/list',
  adminCategorySave: apiBase + 'v1/admin/category/save',

  brandList: apiBase + 'v1/brand/list',
  adminBrandSave: apiBase + 'v1/admin/brand/save',

  adminUserList: apiBase + 'v1/admin/user/list',
  adminUserSave: apiBase + 'v1/admin/user/save',

  adminClientList: apiBase + 'v1/admin/client/list',
  adminClientSave: apiBase + 'v1/admin/client/save',
};

