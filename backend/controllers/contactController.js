const Contact = require("../models/contactModel");

// Obtenir tous les contacts
const getContact = (req, res) => {
    Contact.find()
        .then(contacts => {
            res.json(contacts);
        })
        .catch(error => {
            res.status(500).send({ message: "Erreur lors de la récupération des contacts", error: error });
        });
};

// Créer un nouveau contact
const createContact = (req, res) => {
    const contact = new Contact({
        name: req.body.name,
        firstname: req.body.firstname,
        phone: req.body.phone,
        email: req.body.email,
    });

    contact.save()
        .then(savedContact => {
            res.status(201).json(savedContact);
        })
        .catch(error => {
            res.status(500).send({ message: "Erreur lors de l'enregistrement du contact", error: error });
        });
};

// Mettre à jour un contact
const updateContact = (req, res) => {
    Contact.findByIdAndUpdate(
        req.params.contactID,
        {
            $set: {
                name: req.body.name,
                firstname: req.body.firstname,
                phone: req.body.phone,
                email: req.body.email,
            },
        },
        { new: true }
    )
    .then(updatedContact => {
        res.json(updatedContact);
    })
    .catch(error => {
        res.status(500).send({ message: "Erreur lors de la mise à jour du contact", error: error });
    });
};

// Supprimer un contact
const deleteContact = (req, res) => {
    Contact.deleteOne({ _id: req.params.contactID })
        .then(() => res.json({ message: "Contact supprimé" }))
        .catch((error) => res.status(500).send({ message: "Erreur lors de la suppression du contact", error: error }));
};

module.exports = {
    getContact,
    createContact,
    updateContact,
    deleteContact,
};
