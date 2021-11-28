package tourismpk.tourismpk.service;

@Service
public class SiteCustomerServiceImpl {

    @Autowired
    private SiteCustomerRepo siteCustomerRepo;

    public List<SiteCustomer> getAllSiteCustomer() {
        return siteCustomerRepo.findAll();
    }

    public Optional<SiteCustomer> getSiteCustomerById(Integer id) {
        return siteCustomerRepo.findById(id);
    }

    public SiteCustomer saveSiteCustomer(SiteCustomer siteCustomer) {
        return siteCustomerRepo.save(siteCustomer);
    }
}
