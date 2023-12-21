package entity;

public class Client {
    private int id;
    private String packageName;
    private String diagnosis;
    private int numberOfTreatments;
    private String username;
    private String password;
    private Registration registration;
    private String stage;

    public Client() {
    };

    public Client(int id, String packageName, String diagnosis, int numberOfTreatments, String username,
            String password, Registration registration, String stage) {
        this.id = id;
        this.packageName = packageName;
        this.diagnosis = diagnosis;
        this.numberOfTreatments = numberOfTreatments;
        this.username = username;
        this.password = password;
        this.registration = registration;
        this.stage = stage;
    }

    public int getId() {
        return this.id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getPackageName() {
        return this.packageName;
    }

    public void setPackageName(String packageName) {
        this.packageName = packageName;
    }

    public String getDiagnosis() {
        return this.diagnosis;
    }

    public void setDiagnosis(String diagnosis) {
        this.diagnosis = diagnosis;
    }

    public int getNumberOfTreatments() {
        return this.numberOfTreatments;
    }

    public void setNumberOfTreatments(int numberOfTreatments) {
        this.numberOfTreatments = numberOfTreatments;
    }

    public String getUsername() {
        return this.username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return this.password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Registration getRegistration() {
        return this.registration;
    }

    public void setRegistration(Registration registration) {
        this.registration = registration;
    }

    public String getStage() {
        return this.stage;
    }

    public void setStage(String stage) {
        this.stage = stage;
    }

}
