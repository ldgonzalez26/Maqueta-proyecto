<Dialog
  classes={{
    root: classesDialog.modalRoot,
    paper: classesDialog.modal + " " + classesDialog.modalLogin
  }}
  open={loginModal}
  TransitionComponent={Transition}
  keepMounted
  onClose={() => setLoginModal(false)}
  aria-labelledby="login-modal-slide-title"
  aria-describedby="login-modal-slide-description"
>
  <Card plain className={classesDialog.modalLoginCard}>
    <DialogTitle id="login-modal-slide-title" className={classesDialog.modalHeader}>
      <CardHeader
        plain
        color="primary"
        className={
          classesDialog.textCenter + " " + classesDialog.cardLoginHeader
        }
      >
        <Button
          simple
          className={classesDialog.modalCloseButton}
          key="close"
          aria-label="Close"
          onClick={() => setLoginModal(false)}
        >
          {" "}
          <Close className={classesDialog.modalClose} />
        </Button>
        <h5 className={classesDialog.cardTitleWhite}>Log in</h5>
        <div className={classesDialog.socialLine}>
          <Button
            justIcon
            link
            className={classesDialog.socialLineButton}
          >
            <i className="fab fa-facebook-square" />
          </Button>
          <Button
            justIcon
            link
            className={classesDialog.socialLineButton}
          >
            <i className="fab fa-twitter" />
          </Button>
          <Button
            justIcon
            link
            className={classesDialog.socialLineButton}
          >
            <i className="fab fa-google-plus-g" />
          </Button>
        </div>
      </CardHeader>
    </DialogTitle>
    <DialogContent
      id="login-modal-slide-description"
      className={classesDialog.modalBody}
    >
      <form>
        <p
          className={
            classesDialog.description + " " + classesDialog.textCenter
          }
        >
          Or Be Classical
                        </p>
        <CardBody className={classesDialog.cardLoginBody}>
          <CustomInput
            id="login-modal-first"
            formControlProps={{
              fullWidth: true
            }}
            inputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Face className={classesDialog.icon} />
                </InputAdornment>
              ),
              placeholder: "First Name..."
            }}
          />
          <CustomInput
            id="login-modal-email"
            formControlProps={{
              fullWidth: true
            }}
            inputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Mail className={classesDialog.icon} />
                </InputAdornment>
              ),
              placeholder: "Email..."
            }}
          />
          <CustomInput
            id="login-modal-pass"
            formControlProps={{
              fullWidth: true
            }}
            inputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Icon className={classesDialog.icon}>
                    lock_outline
                                  </Icon>
                </InputAdornment>
              ),
              placeholder: "Password..."
            }}
          />
        </CardBody>
      </form>
    </DialogContent>
    <DialogActions
      className={
        classesDialog.modalFooter + " " + classesDialog.justifyContentCenter
      }
    >
      <Button color="primary" simple size="lg">
        Get started
                      </Button>
    </DialogActions>
  </Card>
</Dialog>