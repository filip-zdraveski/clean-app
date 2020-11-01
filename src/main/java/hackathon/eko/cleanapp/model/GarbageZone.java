package hackathon.eko.cleanapp.model;

import javax.persistence.*;

@Entity
@Table(schema = "public", name = "garbage_zones")
public class GarbageZone {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private long id;

    @ManyToOne
    @JoinColumn(name = "city_id")
    private City city;

    @Column(name = "coordinates")
    private String coordinates;

    @Column(name = "description")
    private String description;

    @ManyToOne
    @JoinColumn(name = "image_id")
    private Image image;

    public GarbageZone() {

    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public City getCity() {
        return city;
    }

    public void setCity(City city) {
        this.city = city;
    }

    public String getCoordinates() {
        return coordinates;
    }

    public void setCoordinates(String coordinates) {
        this.coordinates = coordinates;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Image getImage() {
        return image;
    }

    public void setImage(Image image) {
        this.image = image;
    }
}
